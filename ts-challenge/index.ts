import { Equal, Expect, NotAny } from "utils";

/**
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/13-warm-hello-world/README.md
 */

/** Your code */
type HelloWorld = string;

/**
 * @note You can write your note here
 */

/** Test cases */
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
];
