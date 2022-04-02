import { Equal, Expect } from "utils";

/**
 * Implement the built-in Exclude<T, U>
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md
 */

/** Your code */
type MyExclude<T, U> = T extends U ? never : T;

/**
 * @note You can write your note here
 * take MyExclude<"a" | "b" | "c", "a"> as an example, the operator `extends` will return `true` for `"a"` and `false` for `"b"` and `"c"`,
 * so the type `never` will be returned when `"a"` is excluded from `"a" | "b" | "c"`
 */

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
