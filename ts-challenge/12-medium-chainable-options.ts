import { Alike, Expect } from "utils";

/**
 * Your code here
 * @description Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
 * In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get().
 * In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
 * @see https://tsch.js.org/12
 * @note option's return type should concatenate with the type T, and it's key should not be included in the type T.
 */
type Chainable<T extends {} = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [key in K]: V }>;
  get(): T;
};

/** Test cases */
declare const a: Chainable;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

const result2 = a
  .option("name", "another name")
  // @ts-expect-error
  .option("name", "last name")
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};
