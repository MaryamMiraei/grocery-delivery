import { api } from "./axios";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await api.get("/products");
  return response.data.products;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
};


export const getRelativeProduct = async (filters: IProductFilters) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(
      ([_, value]) => value !== "" && value !== undefined && value !== null,
    ),
  );

  const response = await api.get("/products", {
    params: cleanFilters,
  });

  return response.data.products;
};


export const getDealsProduct = async (): Promise<IProduct[]> => {
  const response = await api.get("products/flash-deals");
  return response.data.products;
};
