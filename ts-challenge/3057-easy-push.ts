import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement the generic version of Array.push
 * @see https://tsch.js.org/3057
 * @note You can write your note here
 */
type Push<T extends any[], U> = [...T, U];

/** Test cases */
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
