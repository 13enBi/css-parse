import { Position } from './parse';

export enum ParseFlag {
	ROOT = 'stylesheet',
	DECLARATION = 'declaration',
	COMMENT = 'comment',
	RULES = 'rules',
	KEYFRAMES = 'keyframes',
	FRAME = 'frame',
	MEDIA = 'media',
	SUPPORTS = 'supports',
	IMPORT = 'import',
	FONTFACE = 'fontface',
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

export interface RootNode extends Omit<CssNode, 'loc'> {
	type: ParseFlag.ROOT;
	rules: ParseNode[];
	source?: string;
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
	[ParseFlag.COMMENT]: string;
}

export interface FrameNode extends CssNode {
	type: ParseFlag.FRAME;
	[ParseFlag.FRAME]: string[];
	declarations: DeclarationNode[];
}

export interface KeyframesNode extends CssNode {
	type: ParseFlag.KEYFRAMES;
	[ParseFlag.KEYFRAMES]: string;
	frames: FrameNode[];
}

export interface MediaNode extends CssNode {
	type: ParseFlag.MEDIA;
	[ParseFlag.MEDIA]: string;
	rules: RuleNode[];
}

export interface SupportsNode extends CssNode {
	type: ParseFlag.SUPPORTS;
	[ParseFlag.SUPPORTS]: string;
	rules: RuleNode[];
}

export interface ImportNode extends CssNode {
	type: ParseFlag.IMPORT;
	[ParseFlag.IMPORT]: string;
}

export interface FontfaceNode extends CssNode {
	type: ParseFlag.FONTFACE;
	fontFamily: string;
	[ParseFlag.FONTFACE]: DeclarationNode[];
}

export type ParseNode = RuleNode | KeyframesNode | MediaNode | SupportsNode | FontfaceNode;
