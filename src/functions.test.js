import {timesTwo} from "./functions";

test("Multiplies by 2", () => {
  expect(timesTwo(5)).toBe(10);
});