test("array matchers",() =>{
  const value = ["arifal","hidayat"];
  expect(value).toContain("arifal");
  expect(value).toContainEqual("hidayat");
});

test("array object", () => {
  const person = [{fisrtname: "arifal"}, {lastname: "hidayat"}];
  expect(person).toContainEqual({
    fisrtname:"arifal"
  })
});