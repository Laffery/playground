import { Equal, Expect, NotAny } from "utils";

/**
 * Implement the built-in Parameters generic without using it.
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/3312-easy-parameters/README.md
 */

/** Your code */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * @note You can write your note here
 */

/** Test cases */
const foo = (_arg1: string, _arg2: number): void => {};
const bar = (_arg1: boolean, _arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
