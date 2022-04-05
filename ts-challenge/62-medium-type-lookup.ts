import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description In this challenge, we would like to get the corresponding type by
 * searching for the common type field in the union Cat | Dog. In other words, we
 * will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'>
 * in the test cases.
 * @see https://tsch.js.org/62
 * @note T is the union type of Cat | Dog, and K is the key of the type to look up. 
 * If T extends `{ type: K }`, then the corresponding type is the type of T.
 */
type LookUp<T extends { type: string }, K extends string> = T extends {
  type: K;
}
  ? T
  : never;

/** Test cases */
interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "ShortHair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];
