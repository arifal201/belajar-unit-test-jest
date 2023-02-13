test("test string with regex", () =>{
  const value = "arifal hidayat salamulloh";

  expect(value).toBe("arifal hidayat salamulloh");
  expect(value).toMatch(/arifal/);
})