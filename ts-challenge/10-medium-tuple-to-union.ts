import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
 * @see https://tsch.js.org/10
 * @note You can write your note here
 */
type TupleToUnion<T> = T extends [infer U, ...infer Rest]
  ? U | TupleToUnion<Rest>
  : never;

/** Test cases */
type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
