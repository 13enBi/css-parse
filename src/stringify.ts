import { ParseFlag, ParseNode, RootNode, RuleNode } from './nodeType';
import { ignoreErrorReduce } from './utils';

const TABSIZE = '	';

export default class Stringify {
	// [ParseFlag.MEDIA](node: MediaNode) {
	// 	return node.loc.source;
	// }

	[ParseFlag.RULES](node: RuleNode) {
		return (
			ignoreErrorReduce(
				node.declarations,
				(s, decl) => {
					return (s += TABSIZE + `${decl.property}: ${decl.value};\n`);
				},
				node.selectors.join(',\n') + ' {\n'
			) + '}\n\n'
		);
	}

	_at(node: ParseNode) {
		return this[node.type]?.(node);
	}

	stringify(root: RootNode) {
		return ignoreErrorReduce(
			root.rules,
			(s, node) => {
				return (s += this._at(node) || '');
			},
			''
		);
	}
}
