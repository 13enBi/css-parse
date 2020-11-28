import { Matcher } from './match';
import { DeclarationNode, RuleNode } from './nodeType';

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

export enum ParseFlag {
	DECLARATION = 'declaration',
	COMMENT = 'comment',
	RULES = 'rules',
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

	getLoc(start: Position, end?: Position) {
		end = end || this.getPos();

		return {
			start,
			end,
			source: this.ctx.originalSource.slice(start.offset, end.offset),
		};
	}

	parseComment() {
		const start = this.getPos(),
			s = this.ctx.source;

		if (s[0] !== '/' || s[1] !== '*') return;

		let i = 2;
		while (!!s[i] && s[i] !== '*' && s[i + 1] !== '/') ++i;
		i += 2;

		const content = s.slice(0, i);
		this.matcher.updatePosition(content);
		this.matcher.advanceBy(content.length);

		return {
			type: ParseFlag.COMMENT,
			content,
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
		this.matcher.match(/^[;\s]*/);

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

	parse() {
		const nodes: (RuleNode | undefined)[] = [];
		this.parseComment();

		while (this.ctx.source.length) {
			const s = this.ctx.source;
			let node: any = void 0;

			if (s[0] === '@') {
				if (this.matcher.keyframes()) {
				}
			} else {
				node = this.parseRules();
			}

			node && nodes.push(node);
		}

		return nodes;
	}
}
