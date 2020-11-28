import { ParserContext } from './parse2';

export class Matcher {
	constructor(public ctx: ParserContext) {}

	advanceBy(length: number) {
		this.ctx.source = this.ctx.source.slice(length);
	}

	updatePosition(str: string) {
		this.ctx.offset += str.length;

		let lines = str.match(/\n/g);
		if (lines) this.ctx.line += lines.length;
		let i = str.lastIndexOf('\n');
		this.ctx.column = ~i ? str.length - i : this.ctx.column + str.length;
	}

	match(reg: RegExp) {
		const res = this.ctx.source.match(reg)?.[0];

		return res && (this.updatePosition(res), this.advanceBy(res.length), res);
	}

	open() {
		return this.match(/^{\s*/);
	}

	close() {
		return this.match(/^}/);
	}

	whitespace() {
		return this.match(/^\s*/);
	}

	comment() {
		return this.match(/^(\/\*)/);
	}

	selector() {
		return this.match(/^([^{]+)/);
	}

	property() {
		return this.match(/^(\*?[-\w]+)\s*/);
	}

	colon() {
		return this.match(/^:\s*/);
	}

	value() {
		return this.match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/)?.trim();
	}

	keyframes() {
		return this.match(/^@([-\w]+)?keyframes */);
	}

	supports() {
		return this.match(/^@supports *([^{]+)/);
	}

	media() {
		return this.match(/^@media *([^{]+)/);
	}

	import() {
		return this.match(/^@import*([^;\\n]+);/);
	}
}
