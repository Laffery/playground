import { Equal, Expect, NotAny } from "utils";

/**
 * Implement the JavaScript Array.concat function in the type system. A type takes the two arguments.
 * The output should be a new array that includes inputs in ltr order
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md
 */

/** Your code */
type Concat<T extends any[], U extends any[]> = [...T, ...U]

/**
 * @note You can write your note here
 * spread operator is used to spread the elements of an array into a list of arguments
 */

/** Test cases */
type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];
