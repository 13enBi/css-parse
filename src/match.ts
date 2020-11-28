import { ParserContext } from './parse2';

export class Matcher {
	constructor(public ctx: ParserContext) {}

	match(reg: RegExp) {
		const res = this.ctx.source.match(reg);

		return res && res[0];
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
		return this.match(/^([^{]+)/)
			?.trim()
			.split(/\s*,\s*/);
	}

	property() {
		return this.match(/^(\*?[-\w]+)\s*/);
	}

	value() {
		return this.match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
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
