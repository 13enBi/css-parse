import Matcher from './matcher';
import { ParseFlag, DeclarationNode, MediaNode } from './nodeType';

export interface Position {
	offset: number;
	line: number;
	column: number;
}

export interface ParserContext extends Position {
	options: any;
	readonly originalSource: string;
	source: string;
}

export default class Parse {
	ctx: ParserContext;
	matcher: Matcher;

	constructor(public css: string, public options: any = {}) {
		this.ctx = this.createParseContext();
		this.matcher = new Matcher(this.ctx);
	}

	createParseContext() {
		return {
			options: this.options,
			column: 1,
			line: 1,
			offset: 0,
			originalSource: this.css,
			source: this.css,
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

		return {
			type: ParseFlag.COMMENT,
			comment,
			loc: this.getLoc(start),
		};
	}

	parseSelector() {
		const selectors = this.matcher.selector();
		if (!selectors) return;

		return selectors.trim().split(/\s*,\s*/);
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

		const selectors = this.parseSelector();
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
			frame,
			declarations,
			loc: this.getLoc(start),
		};
	}

	parseKeyframe() {
		const start = this.getPos();
		if (!this.matcher.keyframes()) return;

		const name = this.parseSelector()?.[0];
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
			name,
			frames,
			loc: this.getLoc(start),
		};
	}

	parseMedia() {
		const start = this.getPos();

		const media = this.matcher.media();
		if (!this.matcher.open() || !media) return;

		const rules: any[] = [];
		while (!this.matcher.close()) {
			rules.push(this.parseRules());
			this.parseComment();
		}

		return {
			media,
			rules,
			loc: this.getLoc(start),
		};
	}

	parse() {
		const nodes: any[] = [];

		do {
			this.parseComment();
			this.matcher.whitespace();

			let node: any = void 0;

			if (this.ctx.source[0] === '@') {
				node = this.parseKeyframe() || this.parseMedia();
			} else {
				node = this.parseRules();
			}

			if (node) {
				nodes.push(node);
			}
		} while (this.ctx.source.length);

		return nodes;
	}
}
