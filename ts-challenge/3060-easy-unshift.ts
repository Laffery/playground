import { Equal, Expect, NotAny } from "utils";

/**
 * Implement the type version of Array.unshift
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/3060-easy-unshift/README.md
 */

/** Your code */
type Unshift<T extends any[], U> = [U, ...T];

/**
 * @note You can write your note here
 */

/** Test cases */
type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
