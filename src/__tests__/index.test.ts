import { parse } from "..";
import stringify from "../stringify";
const css = `
/*comment test */
body {
	font-size: 12px;
}

a {
    color:red;
    fons-size:16px;

`;

describe("css-parse", () => {
	let result: any;
	test("parse", () => {
		result = parse(css);

		expect(result).toHaveProperty("body");
		expect(result).toHaveProperty("a");

		expect(result.body).toHaveProperty("font-size", "12px");
		expect(result.a).not.toHaveProperty("color");
		expect(result.a).not.toHaveProperty("font-size");
	});

	test("stringify", () => {
		const str = stringify(result);

		expect(typeof str === "string").toBeTruthy();
		expect(str).toMatch(/body\s*{\s*font-size:12px;\s*}\s*/);
	});
});
