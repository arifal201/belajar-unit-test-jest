test("not test string", () =>{
  const name = "arifal hidayat salamulloh";

  expect(name).not.toBe("arifal hidayat");
  expect(name).not.toEqual("arifal hidayat");
  expect(name).not.toMatch(/sandi/);
});

test("not test number", () => {
  const value = 2 + 1;
  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeLessThan(1);
  expect(value).not.toBe(4);
});