import { getAllProduct, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js")
test("test mock modules", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "product"
    }
  });
  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "product"
  });
});

test("mock modules getProductAll", () => {
  const products = [
    {
      id: 1,
      name: "product 1"
    },
    {
      id: 2,
      name: "product 2"
    }
  ];

  getAllProduct.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products)
});