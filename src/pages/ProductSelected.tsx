import { useParams } from "react-router";
import ProductsDetails from "../components/productsSelected/ProductsDetails";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/request";
import RelatedProducts from "../components/productsSelected/RelatedProducts";

const ProductSelected = () => {
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ["getProductId", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });
  console.log(product, "selected");
  return (
    <section className="bg-app-cream">
      <ProductsDetails product={product} />
      <RelatedProducts category={product?.category} />
    </section>
  );
};

export default ProductSelected;
