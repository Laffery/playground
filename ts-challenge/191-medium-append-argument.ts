import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description For given function type Fn, and any type A (any in this context means
 * we don't restrict the type, and I don't have in mind any type 😉) create a generic
 * type which will take Fn as the first argument, A as the second, and will produce
 * function type G which will be the same as Fn but with appended argument A as a last one.
 * @see https://tsch.js.org/191
 * @note `infer` arguments' type and return type, use spread operator to append the argument.
 */
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, A]) => R
  : never;

/** Test cases */
type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];
