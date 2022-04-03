import { Equal, Expect } from "utils";

/**
 * Your code here
 * @description Implement the built-in Readonly<T> generic without using it.
 * Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
 * @see https://tsch.js.org/7
 * @note You can write your note here
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/** Test cases */
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
