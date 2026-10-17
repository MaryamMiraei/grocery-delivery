import { useQuery } from "@tanstack/react-query";
import { data, Link } from "react-router";
import { getProducts } from "../../api/request";
import ProductCard from "../common/ProductCard";

const PopularProducts = () => {
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["getProduct"],
    queryFn: getProducts,
  });
  return (
    <section className="my-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <p className="text-gray-600">Top-rated products this season</p>
        </div>

        <Link to="/products">
          <button className="text-green-700">View All →</button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products?.slice(0,10).map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
