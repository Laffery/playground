import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
 * @see https://tsch.js.org/108
 * @note Trim left and trim right.
 */
type Trim<T extends string> = T extends `${" " | "\t" | "\n"}${infer R}`
  ? Trim<R>
  : T extends `${infer L}${" " | "\t" | "\n"}`
  ? Trim<L>
  : T;

/** Test cases */
type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
