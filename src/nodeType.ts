export enum ParseFlag {
	ROOT = 'stylesheet',
	DECLARATION = 'declaration',
	COMMENT = 'comment',
	RULES = 'rules',
	KEYFRAMES = 'keyframes',
	FRAME = 'frame',
	MEDIA = 'media',
}

export interface Location {
	start: Position;
	end: Position;
	source: string;
}

export interface CssNode {
	type: ParseFlag;
	loc: Location;
}

export interface RootNode extends CssNode {
	type: ParseFlag.ROOT;
	rules: RuleNode[];
	source: string;
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

export interface FrameNode extends CssNode {
	type: ParseFlag.FRAME;
	frame: string;
	declarations: DeclarationNode[];
}

export interface KeyframesNode extends CssNode {
	type: ParseFlag.KEYFRAMES;
	name: string;
	frames: FrameNode[];
}

export interface MediaNode extends CssNode {
	type: ParseFlag.MEDIA;
	media: string;
	rules: RuleNode[];
}

export type ParseNode = RuleNode | KeyframesNode | MediaNode;
