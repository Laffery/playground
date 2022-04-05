import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement a generic Last<T> that takes an Array T and returns its last element.
 * @see https://tsch.js.org/15
 * @note You can write your note here
 */
type Last<T extends any[]> = T extends [...any, infer L] ? L : never;

/** Test cases */
type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
