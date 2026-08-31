export const getProducts = async () => {
  const response = await fetch(
    "https://grocery-delivery-server-nu.vercel.app/api/products?sort=rating",
    { method: "GET" },
  );

  const data = await response.json();

  return data.products;
};
