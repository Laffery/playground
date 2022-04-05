import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement Replace<S, From, To> which replace the string From with To once in the given string S
 * @see https://tsch.js.org/116
 * @note First of all, if from === '', nothing will happened to S, just make sure from doesn't extend '', then 
 * use `infer` to get the left and right part of the string and use `To` to replace `From`.
 */
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

/** Test cases */
type cases = [
  Expect<Equal<Replace<"FooBar", "Bar", "Foo">, "FooFoo">>,
  Expect<Equal<Replace<"FooBarBar", "Bar", "Foo">, "FooFooBar">>,
  Expect<Equal<Replace<"FooBarBar", "", "Foo">, "FooBarBar">>,
  Expect<Equal<Replace<"FooBarBar", "bra", "Foo">, "FooBarBar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
