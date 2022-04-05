import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
 * @see https://tsch.js.org/110
 * @note Similar to get first element of an array, use `infer` to get the first character of a string and use `Uppercase` to convert it to uppercase.
 */
type MyCapitalize<T extends string> = T extends `${infer L}${infer Rest}`
  ? `${Uppercase<L>}${Rest}`
  : "";

/** Test cases */

type cases = [
  Expect<Equal<MyCapitalize<"foobar">, "Foobar">>,
  Expect<Equal<MyCapitalize<"FOOBAR">, "FOOBAR">>,
  Expect<Equal<MyCapitalize<"foo bar">, "Foo bar">>,
  Expect<Equal<MyCapitalize<"">, "">>,
  Expect<Equal<MyCapitalize<"a">, "A">>,
  Expect<Equal<MyCapitalize<"b">, "B">>,
  Expect<Equal<MyCapitalize<"c">, "C">>,
  Expect<Equal<MyCapitalize<"d">, "D">>,
  Expect<Equal<MyCapitalize<"e">, "E">>,
  Expect<Equal<MyCapitalize<"f">, "F">>,
  Expect<Equal<MyCapitalize<"g">, "G">>,
  Expect<Equal<MyCapitalize<"h">, "H">>,
  Expect<Equal<MyCapitalize<"i">, "I">>,
  Expect<Equal<MyCapitalize<"j">, "J">>,
  Expect<Equal<MyCapitalize<"k">, "K">>,
  Expect<Equal<MyCapitalize<"l">, "L">>,
  Expect<Equal<MyCapitalize<"m">, "M">>,
  Expect<Equal<MyCapitalize<"n">, "N">>,
  Expect<Equal<MyCapitalize<"o">, "O">>,
  Expect<Equal<MyCapitalize<"p">, "P">>,
  Expect<Equal<MyCapitalize<"q">, "Q">>,
  Expect<Equal<MyCapitalize<"r">, "R">>,
  Expect<Equal<MyCapitalize<"s">, "S">>,
  Expect<Equal<MyCapitalize<"t">, "T">>,
  Expect<Equal<MyCapitalize<"u">, "U">>,
  Expect<Equal<MyCapitalize<"v">, "V">>,
  Expect<Equal<MyCapitalize<"w">, "W">>,
  Expect<Equal<MyCapitalize<"x">, "X">>,
  Expect<Equal<MyCapitalize<"y">, "Y">>,
  Expect<Equal<MyCapitalize<"z">, "Z">>
];
