import { Equal, Expect, NotAny } from "utils";

/**
 * Implement the generic version of Array.push
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/3057-easy-push/README.md
 */

/** Your code */
type Push<T extends any[], U> = [...T, U];

/**
 * @note You can write your note here
 */

/** Test cases */
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
