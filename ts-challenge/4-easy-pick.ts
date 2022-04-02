import { Equal, Expect } from "utils";

/**
 * @description Implement the built-in Pick<T, K> generic without using it. Constructs a type by picking the set of properties K from T.
 * see https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
 */

/** Your code */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/** Test cases */
type TestCases = [
  Expect<Equal<Expect1, MyPick<Todo, "id">>>,
  Expect<Equal<Expect2, MyPick<Todo, "id" | "completed">>>,
  MyPick<Todo, "id" | "title" | "completed">
];

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Expect1 {
  id: number;
}

interface Expect2 {
  id: number;
  completed: boolean;
}
