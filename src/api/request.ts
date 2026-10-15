import { api } from "./axios";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await api.get("/products");
  console.log(response);
  return response.data.products;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const response = await api.get(`/products/${id}`);
  console.log(response, "product by id");
  return response.data.product;
};

export const getRelativeProduct = async (
  category: string,
): Promise<IProduct[]> => {
  const response = await api.get("/products", {
    params: {
      category,
    },
  });
  return response.data.products;
};

// https://grocery-delivery-server-nu.vercel.app/api/auth/register

// https://grocery-delivery-server-nu.vercel.app/api/addresses
