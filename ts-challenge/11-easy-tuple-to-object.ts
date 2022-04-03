import { Equal, Expect } from "utils";

/**
 * Your code here
 * @description Give an array, transform into an object type and the key/value must in the given array.
 * @see https://tsch.js.org/11
 * @note You can write your note here
 */
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P;
};

/** Test cases */
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

type error = [
  // @ts-expect-error
  TupleToObject<[[1, 2], {}]>,
  // @ts-expect-error
  TupleToObject<[undefined]>,
  // @ts-expect-error
  TupleToObject<[null]>
];
