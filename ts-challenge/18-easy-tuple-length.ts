import { Equal, Expect } from "utils";

/**
 * Your code here
 * @description For given a tuple, you need create a generic Length, pick the length of the tuple
 * @see https://tsch.js.org/18
 * @note You can write your note here
 * if you don't use `as const` to declare the tuple, you will get type string[] instead of 
 * ["tesla", "model 3", "model X", "model Y"] which has constance length 4, otherwise you will get `number`
 */
type Length<T extends readonly any[]> = T["length"];

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
