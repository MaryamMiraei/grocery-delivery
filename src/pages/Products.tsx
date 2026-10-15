import { Outlet } from "react-router";
import ProductsDetails from "../components/productsSelected/ProductsDetails";

const Products = () => {
  return (
    <section className="bg-app-cream">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-[64px]">
        <Outlet />
      </section>
    </section>
  );
};

export default Products;
