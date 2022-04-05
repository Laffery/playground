import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
 * @see https://tsch.js.org/16
 * @note You can write your note here
 */
type Pop<T extends any[]> = T extends [...infer L, any] ? L : never;

/** Test cases */
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];
