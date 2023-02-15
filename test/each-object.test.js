import { sumAll } from "../src/sum";

const table = [
  {
    numbers: [10,10,10],
    expected: 30
  },
  {
    numbers: [10,10,10,10],
    expected: 40
  },
  {
    numbers: [10,10,10,10,10],
    expected: 50
  }
]

test.each(table)("test sumAll($numbers) should result $expected", ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected);
});