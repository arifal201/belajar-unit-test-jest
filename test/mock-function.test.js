import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate with mock", () => {
  const callback = jest.fn();

  calculate([10,10,10], callback);
  calculate([10,10,10,10,10], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculateAndReturn mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(30);
  callback.mockReturnValueOnce(50);

  expect(calculateAndReturn([10,10,10], callback)).toBe(30);
  expect(calculateAndReturn([10,10,10,10,10], callback)).toBe(50);

  expect(callback.mock.results[0].value).toBe(30);
  expect(callback.mock.results[1].value).toBe(50);

});

test("test calculateAndReturn mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  })

  expect(calculateAndReturn([10,10,10], callback)).toBe(60);
  expect(calculateAndReturn([10,10,10,10,10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);

});