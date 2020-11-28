import { Matcher } from './match';

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

export interface CssNode {
	[key: string]: any;
}

export enum ParseFlag {
	DECLARATION = 'declaration',
	COMMENT = 'comment',
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

	advanceBy(length: number) {
		this.ctx.source = this.ctx.source.slice(length);
	}

	parseComment() {
		const start = this.getPos(),
			s = this.ctx.source;

		let i = 2;
		while (!!s[i] && s[i] !== '*' && s[i + 1] !== '/') ++i;
		i += 2;

		const content = s.slice(0, i);
		this.advanceBy(content.length);

		return {
			type: ParseFlag.COMMENT,
			content,
			loc: this.getLoc(start),
		};
	}

	parseDeclarations() {}

	parse() {
		const nodes: CssNode[] = [];

		while (this.ctx.source.length) {
			const s = this.ctx.source;
			let node: CssNode | undefined = void 0;

			if (s[0] === '@') {
			} else if (this.matcher.comment()) {
				node = this.parseComment();
			} else {
				if (this.matcher.keyframes()) {
				} else {
				}
			}

			node && nodes.push(node);
		}

		return nodes;
	}
}

const css = `/*
    123
*/`;

console.dir(new Parse(css).parse());
