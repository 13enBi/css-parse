import {
	FrameNode,
	KeyframesNode,
	ParseFlag,
	ParseNode,
	RootNode,
	RuleNode,
	DeclarationNode,
	MediaNode,
	SupportsNode,
	FontfaceNode,
	CommentNode,
} from './nodeType';

const TABSIZE = '	';
const OPEN = ' {\n';
const CLOSE = '}\n\n';

export default class Stringify {
	indent(size = 1) {
		return Array(size).fill(TABSIZE).join('');
	}

	_map(node: ParseNode) {
		return this[node.type]?.(node as any);
	}

	[ParseFlag.DECLARATION](node: DeclarationNode, indentSize = 1) {
		return this.indent(indentSize) + `${node.property}: ${node.value};\n`;
	}

	[ParseFlag.RULES](node: RuleNode | FrameNode, indentSize = 0) {
		const indent = this.indent(indentSize);

		++indentSize;
		const declarations = node.declarations
			.map((decl) => this[ParseFlag.DECLARATION](decl, indentSize))
			.join('');

		const selectors = node.type === ParseFlag.FRAME ? node[ParseFlag.FRAME] : node.selectors;

		return indent + selectors.join(`,\n${indent}`) + OPEN + declarations + indent + CLOSE;
	}

	[ParseFlag.KEYFRAMES](node: KeyframesNode) {
		const frames = node.frames
			.reduce((s, frame) => (s += this[ParseFlag.RULES](frame, 1)), '')
			.slice(0, -1);

		return `@${node.type} ${node[ParseFlag.KEYFRAMES]}` + OPEN + frames + CLOSE;
	}

	_at(node: MediaNode | SupportsNode) {
		const name =
			node.type === ParseFlag.MEDIA ? node[ParseFlag.MEDIA] : node[ParseFlag.SUPPORTS];

		const rules = node.rules
			.reduce((s, rule) => (s += this[ParseFlag.RULES](rule, 1)), '')
			.slice(0, -1);

		return name + OPEN + rules + CLOSE;
	}

	[ParseFlag.MEDIA](node: MediaNode) {
		return this._at(node);
	}

	[ParseFlag.SUPPORTS](node: SupportsNode) {
		return this._at(node);
	}

	[ParseFlag.FONTFACE](node: FontfaceNode) {
		const decls = node[ParseFlag.FONTFACE]
			.map((decl) => this[ParseFlag.DECLARATION](decl))
			.join('');

		return '@font-face' + OPEN + decls + CLOSE;
	}

	[ParseFlag.COMMENT](node: CommentNode) {
		return node[ParseFlag.COMMENT] + '\n';
	}

	stringify(root: RootNode) {
		return root.rules.reduce((s, node) => (s += this._map(node) || ''), '');
	}
}
