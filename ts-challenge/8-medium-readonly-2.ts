import { Expect, Alike } from "utils";

/**
 * Your code here
 * @description Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
 * K specify the set of properties of T that should set to Readonly.
 * When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
 * @see https://tsch.js.org/8
 * @note You can write your note here
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

/** Test cases */
type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
