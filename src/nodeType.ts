import { ParseFlag } from './parse';

export interface CssNode {
	type: string;
	loc: {
		start: Position;
		end: Position;
		source: string;
	};
}

export interface DeclarationNode extends CssNode {
	type: ParseFlag.DECLARATION;
	property: string;
	value: string;
}

export interface RuleNode extends CssNode {
	type: ParseFlag.RULES;
	selectors: string[];
	declarations: DeclarationNode[];
}

export interface CommentNode extends CssNode {
	type: ParseFlag.COMMENT;
	content: string;
}
