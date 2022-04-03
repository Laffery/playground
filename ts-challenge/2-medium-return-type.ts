import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement the built-in ReturnType<T> generic without using it.
 * @see https://tsch.js.org/2
 * @note You can write your note here
 */
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

/** Test cases */
type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, _w: any) => (v ? 1 : 2);
