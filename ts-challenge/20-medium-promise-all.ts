import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Type the function PromiseAll that accepts an array of PromiseLike objects,
 * the returning value should be Promise<T> where T is the resolved result array.
 * @see https://tsch.js.org/20
 * @note keyof an Array is index of the array, it will get an Array as well, so you don't matter to use it.
 * What's more, `infer` is useful to get the resolved result type of promise.
 */
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>;

/** Test cases */
const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];
