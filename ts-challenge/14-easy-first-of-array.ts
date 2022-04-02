import { Equal, Expect } from "utils";

/**
 * @description Implement a generic First<T> that takes an Array T and returns it's first element's type.
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/14-first-of-array/README.md
 */

/** Your code */
/** @error type First<[]> is undefined */
// type First<T extends any[]> = T[0];

type First<T extends any[]> = T extends [] ? never : T[0];

// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// type First<T extends any[]> = T extends [infer First, ...any] ? First : never;

/** Test cases */
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];
