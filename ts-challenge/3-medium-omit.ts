import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement the built-in Omit<T, K> generic without using it.
 * Constructs a type by picking all properties from T and then removing K
 * @see https://tsch.js.org/3
 * @note You can write your note here
 */


type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

/** Test cases */
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
