import { sum } from "../src/sum.js";

test("test sum function ", () =>{
  const result = sum(10,50);

  expect(result).toBe(60);
})