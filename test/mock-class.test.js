import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
  const user = {
    id: 1,
    name: "arifal"
  };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock findById", () => {
  const user = {
    id: 1,
    name: "arifal"
  };

  repository.findById.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock findById", () => {
  const users = [
    {
      id: 1,
      name: "arifal"
    },
    {
      id: 2,
      name: "arifal"
    }
  ]

  repository.findAll.mockReturnValueOnce(users);

  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});