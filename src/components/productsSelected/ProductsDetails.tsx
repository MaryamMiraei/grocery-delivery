import { Link } from "react-router";
import { useMyCardStore } from "../../store/myCardStore";

interface IProps {
  product: IProduct | undefined;
}
const ProductsDetails = ({ product }: IProps) => {
  const { addItem, updateQuantity, items , removeItem} = useMyCardStore();

  const currentItem = items.find((item) => item.id === product?.id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;

  return (
    <section className="min-h-screen px-5 lg:px-20 py-10">
      <div className="text-gray-500 mb-8">
        <Link to={"/"}>Home </Link>/<Link to={"/products"}>Products </Link> /
        {product?.category} /
        <span className="text-gray-800">{product?.name}</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl p-8">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full max-w-md h-[450px] object-contain"
          />
        </div>

        <div>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            {product?.discount}% OFF
          </span>

          <h1 className="text-5xl font-bold mt-5">{product?.name}</h1>

          <p className="text-gray-500 mt-3">{product?.category}</p>

          <div className="flex items-center gap-2 mt-5">
            ⭐⭐⭐⭐⭐
            <span>
              {product?.rating} ({product?.reviewCount} reviews)
            </span>
          </div>

          <div className="mt-5">
            <span className="text-3xl font-bold">${product?.price}</span>

            <span className="line-through text-gray-400 ml-3">
              ${product?.originalPrice}
            </span>
          </div>

          <p className="text-gray-600 mt-6">${product?.description}</p>

          <div className="mt-6 text-green-600 font-semibold">
            ✓ <span>{product?.stock} </span>In Stock
          </div>

          {currentQuantity === 0 ? (
            <button
              onClick={() =>
                addItem({
                  id: product?.id!,
                  name: product?.name!,
                  price: product?.price!,
                  image: product?.image!,
                  quantity: 1,
                  stock: product?.stock!,
                })
              }
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-2xl text-lg font-semibold"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-5 mt-8">
              <button
                onClick={() => {
                  if (currentQuantity > 1) {
                    updateQuantity(product?.id!, currentQuantity - 1);
                  } else {
                    removeItem(product?.id!);
                  }
                }}
                className="border rounded-lg w-10 h-10"
              >
                -
              </button>

              <span>{currentQuantity}</span>

              <button
                onClick={() =>
                  updateQuantity(product?.id!, currentQuantity + 1)
                }
                className="border rounded-lg w-10 h-10"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
