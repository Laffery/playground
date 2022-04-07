import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Compute the length of a string literal, which behaves like String#length.
 * @see https://tsch.js.org/298
 * @note transform string literal into the array that includes every character, just like `str.split('')`,
 * and then get the length of the array.
 * Take advantage of type Array as temporary storage.
 */
type LengthOfString<
  T extends string,
  Array extends string[] = []
> = T extends `${infer L}${infer Rest}`
  ? LengthOfString<Rest, [...Array, L]>
  : Array["length"];

type cases = [
  /** Test cases */
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"hello">, 5>>,
  Expect<Equal<LengthOfString<"world!">, 6>>,
  Expect<Equal<LengthOfString<"hello world!">, 12>>
];
