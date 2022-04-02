import { Equal, Expect } from "utils";

/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md
 */

/** Your code */
type Length<T extends readonly any[]> = T["length"];

/**
 * @note You can write your note here
 * if you don't use `as const` to declare the tuple, you will get type string[] instead of 
 * ["tesla", "model 3", "model X", "model Y"] which has constance length 4, otherwise you will get `number`
 */

/** Test cases */
const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
