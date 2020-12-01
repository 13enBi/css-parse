import { ParseFlag, RootNode } from './nodeType';

export default class Stringify {
	[ParseFlag.ROOT](node: RootNode) {
		return node?.source;
	}
}
