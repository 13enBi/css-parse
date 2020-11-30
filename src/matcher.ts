import { ParseContext } from './parse';

export default class Matcher {
	constructor(public ctx: ParseContext) {}

	advanceBy(length: number) {
		this.ctx.source = this.ctx.source.slice(length);
	}

	updatePosition(str: string) {
		this.ctx.offset += str.length;

		let lines = str.match(/\n/g);
		if (lines) this.ctx.line += lines.length;

		let i = str.lastIndexOf('\n');
		this.ctx.column = i !== -1 ? str.length - i : this.ctx.column + str.length;
	}

	match(reg: RegExp) {
		const res = this.ctx.source.match(reg)?.[0];

		return res && (this.updatePosition(res), this.advanceBy(res.length), res);
	}

	/* { */
	open() {
		return this.match(/^{\s*/);
	}

	/* } */
	close() {
		return this.match(/^}/);
	}

	whitespace() {
		return this.match(/^\s*/);
	}

	comment() {
		if (!this.match(/^\/\*/)) return;

		const s = this.ctx.source;

		let i = 0;
		while (s[i] + s[i + 1] !== '*/') ++i;
		i += 2;

		const content = s.slice(0, i);

		this.updatePosition(content);
		this.advanceBy(content.length);

		return content;
	}

	selector() {
		return this.match(/^([^{]+)/)
			?.trim()
			.split(/\s*,\s*/);
	}

	property() {
		return this.match(/^(\*?[-\w]+)\s*/);
	}

	/* : */
	colon() {
		return this.match(/^:\s*/);
	}

	/* ; */
	semi() {
		return this.match(/^[;\s]*/);
	}

	/* , */
	comma() {
		return this.match(/^,\s*/);
	}

	value() {
		return this.match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/)?.trim();
	}

	/* @keyframes */
	keyframes() {
		return this.match(/^@([-\w]+)?keyframes */);
	}

	/* from | to | num%  */
	frames() {
		return this.match(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/)?.trim();
	}

	supports() {
		return this.match(/^@supports *([^{]+)/);
	}

	/* @media */
	media() {
		return this.match(/^@media *([^{]+)/)?.trim();
	}

	/* @import */
	import() {
		return this.match(/^@import*([^;\\n]+);/);
	}

	/* @font-face */
	fontface() {
		return this.match(/^@font-face\s*/);
	}
}
