import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
 * @see https://tsch.js.org/119
 * @note Based on challenge@116, replace both the left and the right part of the string, do not replace the whole `${L}${From}${R}`,
 * which will replace all the `From` recursively until the concatenation string does not contain `From`.
 */
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}`
  : S;

/** Test cases */
type cases = [
  Expect<Equal<ReplaceAll<"FooBar", "Bar", "Foo">, "FooFoo">>,
  Expect<Equal<ReplaceAll<"FooBar", "bag", "Foo">, "FooBar">>,
  Expect<Equal<ReplaceAll<"FooBarBar", "Bar", "Foo">, "FooFooFoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"FooBarBar", "", "Foo">, "FooBarBar">>,
  Expect<Equal<ReplaceAll<"BarFoo", "Bar", "Foo">, "FooFoo">>,
  Expect<Equal<ReplaceAll<"FooBarFooBar", "oB", "B">, "FoBarFoBar">>,
  Expect<Equal<ReplaceAll<"FoBoorFoBoar", "Bo", "B">, "FoBorFoBar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];
