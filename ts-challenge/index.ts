import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Hello, World!
 * @see https://tsch.js.org/13
 * @note You can write your note here
 */
type HelloWorld = string;

/** Test cases */
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
];
