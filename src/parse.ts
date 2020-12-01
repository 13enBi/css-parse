import Matcher from './matcher';
import { ParseFlag, DeclarationNode, ParseNode } from './nodeType';

export interface Position {
	offset: number;
	line: number;
	column: number;
}

export interface ParseContext extends Position {
	readonly originalSource: string;
	source: string;
}

export interface ParseOptions {
	comment: boolean;
}

export default class Parse {
	ctx: ParseContext;
	matcher: Matcher;
	nodes: ParseNode[] = [];

	constructor(
		public css: string,
		public options: ParseOptions = {
			comment: true,
		}
	) {
		this.ctx = this.createParseContext();
		this.matcher = new Matcher(this.ctx);
	}

	createParseContext() {
		return {
			column: 1,
			line: 1,
			offset: 0,
			originalSource: this.css,
			source: this.css,
		};
	}

	createRoot() {
		return {
			type: ParseFlag.ROOT,
			source: this.ctx.originalSource,
			rules: this.nodes,
		};
	}

	getPos() {
		const { column, line, offset } = this.ctx;

		return { column, line, offset };
	}

	getLoc(start: Position, end: Position = this.getPos()) {
		return {
			start,
			end,
			source: this.ctx.originalSource.slice(start.offset, end.offset),
		};
	}

	parseComment() {
		this.matcher.whitespace();

		const start = this.getPos();
		const comment = this.matcher.comment();
		if (!comment) return;
		this.matcher.whitespace();

		const node: any = {
			type: ParseFlag.COMMENT,
			[ParseFlag.COMMENT]: comment,
			loc: this.getLoc(start),
		};

		if (this.options.comment) this.nodes.push(node);

		return node;
	}

	parseDecl() {
		const start = this.getPos();

		const property = this.matcher.property();
		if (!property) return;

		const colon = this.matcher.colon();
		if (!colon) return;

		const value = this.matcher.value();
		if (!value) return;

		const end = this.getPos();
		this.matcher.semi();

		return {
			type: ParseFlag.DECLARATION,
			loc: this.getLoc(start, end),
			property,
			value,
		};
	}

	parseDecls() {
		if (!this.matcher.open()) return;

		this.parseComment();

		const decls: DeclarationNode[] = [];

		let decl;
		while ((decl = this.parseDecl())) {
			decls.push(decl);
			this.parseComment();
		}

		if (!this.matcher.close()) return;

		return decls;
	}

	parseRules() {
		this.matcher.whitespace();

		const start = this.getPos();

		const selectors = this.matcher.selector();
		if (!selectors) return;
		const declarations = this.parseDecls();

		const end = this.getPos();

		return { type: ParseFlag.RULES, selectors, declarations, loc: this.getLoc(start, end) };
	}

	parseFrame() {
		const start = this.getPos();

		let item;
		const frame: any[] = [];

		while ((item = this.matcher.frames())) {
			frame.push(item);
			this.matcher.comma();
		}

		if (!frame.length) return;

		const declarations = this.parseDecls();

		return {
			type: ParseFlag.FRAME,
			[ParseFlag.FRAME]: frame,
			declarations,
			loc: this.getLoc(start),
		};
	}

	parseKeyframe() {
		const start = this.getPos();
		if (!this.matcher.keyframes()) return;

		const name = this.matcher.selector()?.[0];
		if (!name) return;

		if (!this.matcher.open()) return;
		this.parseComment();

		let frame;
		const frames: any[] = [];

		while ((frame = this.parseFrame())) {
			frames.push(frame);
			this.parseComment();
		}

		if (!this.matcher.close()) return;

		return {
			type: ParseFlag.KEYFRAMES,
			[ParseFlag.KEYFRAMES]: name,
			frames,
			loc: this.getLoc(start),
		};
	}

	_atParse(type: ParseFlag, matcher: () => string | undefined) {
		const start = this.getPos();

		const res = matcher();
		if (!this.matcher.open() || !res) return;
		this.parseComment();

		const rules: any[] = [];
		while (!this.matcher.close()) {
			rules.push(this.parseRules());
			this.parseComment();
		}

		return {
			type,
			[type]: res,
			rules,
			loc: this.getLoc(start),
		};
	}

	parseMedia() {
		return this._atParse(ParseFlag.MEDIA, () => this.matcher.media() /* this */);
	}

	parseSupports() {
		return this._atParse(ParseFlag.SUPPORTS, () => this.matcher.supports());
	}

	parseImport() {
		const start = this.getPos();

		const imp = this.matcher.import();
		if (!imp) return;

		const url = this.matcher.url(imp);
		if (!url) return;

		return {
			type: ParseFlag.IMPORT,
			[ParseFlag.IMPORT]: imp,
			url,
			loc: this.getLoc(start),
		};
	}

	parseFontface() {
		const start = this.getPos();

		if (!this.matcher.fontface()) return;
		const fontface = this.parseDecls();
		const fontFamily = fontface?.find((node) => node.property === 'font-family')?.value;

		return {
			type: ParseFlag.FONTFACE,
			fontFamily,
			[ParseFlag.FONTFACE]: fontface,
			loc: this.getLoc(start),
		};
	}

	at() {
		return (
			this.parseKeyframe() ||
			this.parseMedia() ||
			this.parseSupports() ||
			this.parseImport() ||
			this.parseFontface()
		);
	}

	parse() {
		do {
			this.parseComment();
			this.matcher.whitespace();

			let node: any = void 0;

			if (this.ctx.source[0] === '@') {
				node = this.at();
			} else {
				node = this.parseRules();
			}

			if (node) {
				this.nodes.push(node);
			}
		} while (this.ctx.source.length);

		return this.createRoot();
	}
}
