import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement the built-in Parameters generic without using it.
 * @see https://tsch.js.org/3312
 * @note You can write your note here
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/** Test cases */
const foo = (_arg1: string, _arg2: number): void => {};
const bar = (_arg1: boolean, _arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
