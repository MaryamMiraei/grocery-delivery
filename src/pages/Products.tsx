import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Home, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { getRelativeProduct } from "../api/request";
import { category } from "../api/category";
import ProductCard from "../components/common/ProductCard";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [appliedCategory, setAppliedCategory] = useState(category[0]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");

  const [apiArgumendt, setApiArgument] = useState<IProductFilters>({
    category: selectedCategory.link,
    maxPrice: maxPrice,
    limit: "12",
    page: "1",
  });


  console.log(apiArgumendt)

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", apiArgumendt],
    queryFn: () => getRelativeProduct(apiArgumendt),
  });


  const handleApplyFilters = () => {
      setAppliedCategory(selectedCategory);

    const newFilters: IProductFilters = {
      category: selectedCategory.link,
      limit: "12",
      page: "1",
      maxPrice: maxPrice,
    };

    if (minPrice !== "") {
      newFilters.minPrice = minPrice;
    }

    if (maxPrice !== "") {
      newFilters.maxPrice = maxPrice;
    }

    setApiArgument(newFilters);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-8 pt-20">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link to={"/"}>
          <Home className="w-3.5 h-3.5" />
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-bold text-gray-800">
          {appliedCategory.title}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_3fr] lg:grid-cols-4 gap-5 ]">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 h-fit w-[224px]">
          <h2 className="font-black text-gray-900 text-base">Categories</h2>
          <div className="flex flex-col gap-1.5">
            {category.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                  selectedCategory === cat
                    ? "bg-[#1A2E22] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              Price Range
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
              />
            </div>
          </div>
          <button
            onClick={handleApplyFilters}
            className="w-full rounded-xl bg-[#1A2E22] px-4 py-3 font-bold text-white transition hover:bg-[#263d35]"
          >
            Apply Filters
          </button>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                {appliedCategory.title}
              </h1>
              <span className="text-xs text-gray-500">
                {products.length} products found
              </span>
            </div>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-700 focus:outline-none"
            >
              <option value="Newest">Newest</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
            </select>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#FF7A00]" />
            </div>
          ) : isError ? (
            <div className="text-center py-20 text-red-500 font-bold">
              {error instanceof Error
                ? error.message
                : "خطا در دریافت اطلاعات محصولات."}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No products found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
