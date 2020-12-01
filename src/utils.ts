export const last = <T>(arr: T[]): T => arr[arr.length - 1];

export const ignoreErrorReduce = <T, U>(
	arr: T[],
	cb: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
	init: U
): U => {
	return arr.reduce((...s: Parameters<typeof cb>) => {
		try {
			return cb(...s);
		} catch (error) {
			return s[0];
		}
	}, init);
};
