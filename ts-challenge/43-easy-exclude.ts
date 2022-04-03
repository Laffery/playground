import { Equal, Expect } from "utils";

/**
 * Your code here
 * @description Implement the built-in Exclude<T, U>
 * @see https://tsch.js.org/43
 * @note take MyExclude<"a" | "b" | "c", "a"> as an example, the operator `extends` will return `true` for `"a"` and `false` for `"b"` and `"c"`,
 * so the type `never` will be returned when `"a"` is excluded from `"a" | "b" | "c"`
 */
type MyExclude<T, U> = T extends U ? never : T;

/** Test cases */
type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
