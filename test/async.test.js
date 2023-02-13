import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync('arifal');
  expect(result).toBe('Hello arifal');
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("arifal")).resolves.toBe("Hello arifal");
  await expect(sayHelloAsync()).rejects.toBe("name is empty");
});