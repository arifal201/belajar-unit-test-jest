import { sayHello } from "../src/sayHello"

test("sayHello success", () => {
  expect(sayHello('arifal')).toBe('Hello arifal');
});

test.failing("sayHello fail", () =>{
  sayHello(null);
})