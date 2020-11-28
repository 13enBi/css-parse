export interface ParserContext {
	options: any;
	readonly originalSource: string;
	source: string;
	offset: number;
	line: number;
	column: number;
}

export default class Parae {
	ctx: ParserContext;

	constructor(public css: string, public options: any) {
		this.ctx = this.createParseContext();
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

	advanceBy(length: number) {
		this.ctx.source = this.ctx.source.slice(length);
	}
}
