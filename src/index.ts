import Parse from './parse';
export { default as stringify } from './stringify';
export const parse = (css: string) => new Parse(css).parse().rules;

export * from './parse';
export * from './nodeType';
