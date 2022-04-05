import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement TrimLeft<T> which takes an exact string type and returns
 * a new string with the whitespace beginning removed.
 * @see https://tsch.js.org/106
 * @note Use template string to concatenate the string literal type. Recursively remove the left whitespace.
 */
type TrimLeft<T extends string> = T extends `${" " | "\t" | "\n"}${infer S}`
  ? TrimLeft<S>
  : T;

/** Test cases */
type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
