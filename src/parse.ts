export type ParseResult = Record<string, Record<string, string>>;

export default class Parse {
	constructor(public css: string) {}

	match(reg: RegExp) {
		const res = this.css.match(reg)?.[0];

		return res && ((this.css = this.css.slice(res.length)), res);
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

	selector() {
		return this.match(/^([^{]+)/)?.trim();
		//	.split(/\s*,\s*/);
	}

	property() {
		return this.match(/^(\*?[-\w]+)\s*/);
	}

	value() {
		return this.match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
	}

	declaration() {
		const property = this.property();
		if (!property) return;

		//:
		if (!this.match(/^:\s*/)) return;

		const value = this.value();
		if (!value) return;

		//;
		this.match(/^[;\s]*/);

		return { property, value };
	}

	declarationObj() {
		if (!this.open()) return;

		const obj = {};

		while (1) {
			const res = this.declaration();
			if (!res) break;

			Object.assign(obj, { [res.property]: res.value });
		}

		if (!this.close()) return;

		return obj;
	}

	rule() {
		const selector = this.selector();

		if (!selector) return;

		return {
			[selector]: { ...this.declarationObj() },
		};
	}

	comment() {
		const { css } = this;

		if (css[0] !== "/" && css[1] !== "*") return;

		let i = 2;
		while (css[i] != undefined && (css[i] !== "*" || css[i + 1] !== "/")) ++i;
		i += 2;

		this.css = css.slice(i);
	}

	parse(): ParseResult {
		this.whitespace();
		const rules = {};
		this.comment();
		while (1) {
			const rule = this.rule();

			if (!(this.css[0]! == "}" || rule)) {
				break;
			}
			this.comment();

			Object.assign(rules, rule);
		}

		return rules;
	}
}
