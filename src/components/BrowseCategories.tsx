import { Link } from "react-router";
import { category } from "../api/category";
import { useRef } from "react";

const BrowseCategories = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current.scrollLeft;

    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    scrollRef.current.scrollLeft = scrollLeft.current - distance;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-16">
      <div>
        <h2 className="text-2xl font-semibold">Browse Categories</h2>
        <p className="text-sm text-app-text-light mt-1">
          Find exactly what you need using
        </p>
      </div>
      <div
        className="flex items-center mt-8 overflow-x-scroll my-scroll"
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {category.map((item) => (
          <Link
            key={item.id}
            to={`/products${item.link}`}
            className="group flex flex-col items-center gap-3 p-4"
          >
            <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain rounded-full transition-all"
              />
            </div>
            <p className="text-xs font-medium text-zinc-600 text-center leading-tight">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
