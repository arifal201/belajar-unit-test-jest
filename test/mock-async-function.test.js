import { getBalance } from "../src/async";

test("mock async function", async () =>{
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance('arifal',from)).resolves.toEqual({
    name: 'arifal',
    balance: 1000
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("ups"));

  await getBalance("arifal",from);
});

test("mock async function matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Rejected"));

  await expect(async () => {
    getBalance("arifal",from).rejects.toBe("Rejected");
  })
});