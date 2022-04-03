import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F.
 * C is expected to be either true or false while T and F can be any type.
 * @see https://tsch.js.org/269
 * @note You can write your note here
 */
type If<C extends boolean, T, F> = C extends true ? T : F;

/** Test cases */
type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
