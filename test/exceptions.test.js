import { callme, MyException } from "../src/exception";

test("exceptions matchers",() =>{
  expect(() => callme('arifal')).toThrow();
  expect(() => callme('arifal')).toThrow(MyException);
  expect(() => callme('arifal')).toThrow("ups my expection happends");
});

test("exception not happends", async () => {
  expect(callme('budi')).toBe('ok');
});