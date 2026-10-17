import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Home, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { getRelativeProduct } from "../api/request";
import { category } from "../api/category";
import ProductCard from "../components/common/ProductCard";

const Products = () => {
   const [selectedCategory, setSelectedCategory] = useState("All Categories");

   const [minPrice, setMinPrice] = useState("");
   const [maxPrice, setMaxPrice] = useState("");
   const [sortOrder, setSortOrder] = useState("Newest");

   // استفاده از useQuery برای دریافت داده‌ها بر اساس دسته‌بندی انتخاب‌شده
   const {
     data: products = [],
     isLoading,
     isError,
     error,
   } = useQuery({
     queryKey: ["products", selectedCategory], // کلید یکتا که با تغییر دسته‌بندی، کوئری مجدداً اجرا می‌شود
     queryFn: () => getRelativeProduct(selectedCategory),
    //  keepPreviousData: true, // حفظ داده‌های قبلی هنگام لود شدن دسته‌بندی جدید (جلوگیری از پرش صفحه)
   });

   // فیلتر محلی قیمت روی محصولات دریافتی
   const filteredProducts = products.filter((product) => {
     const matchesMin = minPrice === "" || product.price >= Number(minPrice);
     const matchesMax = maxPrice === "" || product.price <= Number(maxPrice);
     return matchesMin && matchesMax;
   });

   return (
     <div className="min-h-screen bg-[#FDFBF7] p-8">
       {/* مسیر صفحه (Breadcrumb) پویا */}
       <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
         <button
           onClick={() => setSelectedCategory("All Categories")}
           className="flex items-center gap-1 hover:text-gray-900 transition"
         >
           <Home className="w-3.5 h-3.5" />
           <span>Home</span>
         </button>
         <ChevronRight className="w-3 h-3 text-gray-400" />
         <span className="font-bold text-gray-800">{selectedCategory}</span>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* سایدبار دسته‌بندی‌ها */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 h-fit">
           <h2 className="font-black text-gray-900 text-base">Categories</h2>
           <div className="flex flex-col gap-1.5">
             {category.map((cat) => (
               <button
                 key={cat.id}
                 onClick={() => setSelectedCategory(cat.link)}
                 className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                   selectedCategory === cat.link
                     ? "bg-[#1A2E22] text-white shadow-sm"
                     : "text-gray-600 hover:bg-gray-50"
                 }`}
               >
                 {cat.title}
               </button>
             ))}
           </div>

           {/* فیلتر قیمت */}
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
         </div>

         {/* محتوای اصلی */}
         <div className="lg:col-span-3 space-y-6">
           <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
             <div>
               <h1 className="text-2xl font-black text-gray-900">
                 {selectedCategory}
               </h1>
               <span className="text-xs text-gray-500">
                 {filteredProducts.length} products found
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

           {/* حالت لودینگ و خطا */}
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
           ) : filteredProducts.length === 0 ? (
             <div className="text-center py-20 text-gray-400">
               محصولی یافت نشد.
             </div>
           ) : (
             /* گرید محصولات */
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {filteredProducts.map((product) => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </div>
           )}
         </div>
       </div>
     </div>
   );
  // return (
  //   <section className="bg-app-cream">
  //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-[64px]">
  //       <nav className="flex items-center gap-2 text-sm text-app-text-light mb-6">
  //         <Link to={"/"}>
  //         <Home/>
  //         </Link>
  //         <span> / </span>

  //       </nav>
  //     </section>
  //   </section>
  // );
};

export default Products;
