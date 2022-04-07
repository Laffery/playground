import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement permutation type that transforms union types into the array that includes permutations of unions.
 * @see https://tsch.js.org/296
 * @note see https://github.com/type-challenges/type-challenges/issues/614#issuecomment-790210311
 * - how to loop union types: extends
 * - how to check never
 * @example 
 * Permutation<"a" | "b" | "c"> = P<A | B | C>
 * = P<A | B | C, A | B | C> = P<A | B | C, A> | P<A | B | C, B> | P<A | B | C, C> (1)
 * we have 
 * P<A | B | C, A> = P<A | B | C, A, A | B>
 * = [A, P<B | C>] 
 * = [A, P<B | C, B> | P<B | C, C>]
 * = [A, P<B | C, B, C> | P<B | C, C, B>]
 * = [A, B, C] | [A, C, B]
 * thus we have
 * (1) = [A, B, C] | [A, C, B] | [B, A, C] | [B, C, A] | [C, A, B] | [C, B, A]
 */
type Permutation<Union, Item = Union> = IsNever<Union> extends true
  ? []
  : Item extends Item
  ? PermuteItem<Union, Item>
  : never;
type PermuteItem<
  Union,
  Item,
  Rest = Exclude<Union, Item>
> = IsNever<Rest> extends true ? [Item] : [Item, ...Permutation<Rest>];
type IsNever<T> = [T] extends [never] ? true : false;

/** Test cases */
type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<never>, []>>
];
