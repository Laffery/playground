import { Equal, Expect } from "utils";

/**
 * @description Implement the built-in Readonly<T> generic without using it. 
 * Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md
 */

/** Your code */
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
