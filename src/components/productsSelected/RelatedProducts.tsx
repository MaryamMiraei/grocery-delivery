import { useQuery } from "@tanstack/react-query";
import { getRelativeProduct } from "../../api/request";
import ProductCard from "../common/ProductCard";

interface IProps {
  category: string| undefined;
}
const RelatedProducts = ({ category }:IProps) => {

  const { data: products } = useQuery({
    queryKey: ["getRelativeProduct", category],
    queryFn: () => getRelativeProduct(category!),
  }); 


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RelatedProducts;
