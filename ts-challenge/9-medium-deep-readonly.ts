import { Equal, Expect, NotAny } from "utils";

/**
 * Your code here
 * @description Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
 * You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration.
 * However, you can still challenge your self by covering different cases as many as possible.
 * @see https://tsch.js.org/9
 * @note You can write your note here
 */
type DeepReadonly<T> = T extends { [key: string | number | symbol]: unknown }
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;

/** Test cases */
type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
    };
  };
};
