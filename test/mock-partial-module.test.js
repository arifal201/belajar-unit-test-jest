import { getAllProduct, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () =>{
  const originalModule = jest.requireActual("../src/database.js");
  return {
    __esmodule : true,
    ...originalModule,
    getAllProduct: jest.fn()
  }
});

test("mock partial modules", () => {
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
})