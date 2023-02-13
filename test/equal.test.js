test("test toBe", () =>{
  const name = "Arifal";
  const fullname = `Hello ${name}`;

  expect(fullname).toBe('Hello Arifal');
});

test("test Equals", () => {
  let person = {id: 1};
  Object.assign(person, {name: "Arifal Hidayat"});

  expect(person).toEqual({id: 1, name: "Arifal Hidayat"});
})
