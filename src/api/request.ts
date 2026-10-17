import { api } from "./axios";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await api.get("/products");
  return response.data.products;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
};

export const getRelativeProduct = async (
  category: string,
): Promise<IProduct[]> => {
  const response = await api.get("/products", {
    params: {
      category,
      page: 1,
      limit: 2,
    },
  });
  return response.data.products;
};

export const getDealsProduct = async (): Promise<IProduct[]> => {
  const response = await api.get("products/flash-deals");
  return response.data.products;
};
