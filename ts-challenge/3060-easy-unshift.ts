import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement the type version of Array.unshift
 * @see https://tsch.js.org/3060
 * @note You can write your note here
 */
type Unshift<T extends any[], U> = [U, ...T];

/** Test cases */
type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
