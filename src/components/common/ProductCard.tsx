import { Link } from 'react-router';

interface IProps {
  product: IProduct | undefined;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div  className="shadow-xl rounded-2xl p-4 bg-white">
      <Link to={`/products/${product?.id}`}>
        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
          {product?.discount}% OFF
        </span>

        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-contain hover:scale-110 transition-all duration-300"
        />

        <div className="mt-3">
          <h3 className="font-semibold mt-3">{product?.name}</h3>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            ⭐ {product?.rating}
            <span>({product?.reviewCount})</span>
          </div>
        </div>
      </Link>

      <div className="mt-2 flex justify-between items-center">
        <div>
          <span className="font-bold">${product?.price}</span>

          <span className="text-gray-500 text-sm ml-1">/{product?.unit}</span>

          <span className="text-gray-400 line-through ml-2">
            ${product?.originalPrice}
          </span>
        </div>

        <button
          // onClick={() => addToCart(product)}
          className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard