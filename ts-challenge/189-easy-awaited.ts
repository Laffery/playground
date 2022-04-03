import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
 * For example if we have Promise<ExampleType> how to get ExampleType?
 * @see https://tsch.js.org/189
 * @note recursively unwrap the type until it is not a Promise type
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : T;

/** Test cases */
type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type A = Promise<Promise<Promise<number>>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<A>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
