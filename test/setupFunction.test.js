import { sum } from "../src/sum";

beforeEach(() => {
  console.info("before test");
});

afterEach(() => {
  console.info("after test");
});

beforeAll(() => {
  console.info("before all test");
})

afterAll(() => {
  console.info("after all test");
})

test("first test", () => {
  console.info(sum(50,50));
  console.info('first test');
});

test("second test", () => {
  console.info(sum(70,80));
  console.info('second test');
});