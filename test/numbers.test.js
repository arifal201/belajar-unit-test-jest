test("test numbers", () => {
  const value = 5 + 5;
  expect(value).toBeGreaterThan(2);
  expect(value).toBeGreaterThanOrEqual(8);

  expect(value).toBeLessThan(11);
  expect(value).toBeLessThanOrEqual(12);

  expect(value).toBe(10);
})