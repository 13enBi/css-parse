import Parse from './parse';
export { default as stringify } from './stringify';
export const parse = (css: string) => new Parse(css).parse();

export * from './parse';
export * from './nodeType';
