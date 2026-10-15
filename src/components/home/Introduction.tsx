import { Clock, Leaf, ShieldCheck, Truck } from 'lucide-react';


const Introduction = () => {
  return (
    <section>
      <section className="relative mx-auto mt-4 h-[540px] w-full overflow-hidden rounded-[20px]">
        {/* Background Image */}
        <img
          src="public/vegetables.jpeg"
          alt="Fresh vegetables"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Badge */}
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full bg-[#536c3b]/50 px-4 py-2 text-[11px] font-semibold text-[#ffb52e]">
            <span>♧</span>
            Farm-Fresh & Organic
          </div>

          {/* Title */}
          <h1 className="font-serif text-[36px] md:text-[46px]  font-bold leading-[1.25] text-white">
            Nourish your home
            <br />
            with <span className="text-[#ffad45]">Earth&apos;s finest</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[430px] text-[13px] leading-6 text-white/80">
            Fresh, organic groceries delivered from local farms to your
            doorstep. Quality you can taste, convenience you deserve.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex items-center gap-3">
            <button
              className="
          rounded-full
          bg-[#ff9208]
          px-6 py-3
          text-[13px]
          font-bold
          text-white
          transition
          hover:bg-[#f58400]
        "
            >
              Shop Now
              <span className="ml-2">→</span>
            </button>

            <button
              className="
          rounded-full
          border border-white/30
          bg-white/10
          px-6 py-3
          text-[13px]
          font-semibold
          text-white
          transition
          hover:bg-white/20
        "
            >
              Browse Categories
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white p-5 border border-app-border/80 rounded-xl mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 py-3">
            <Truck className="size-10 rounded-lg bg-app-cream p-2" />
            <div>
              <p className="text-sm font-semibold text-app-green">
                Free Delivery
              </p>
              <p className="text-xs text-app-text-light">Orders over $20</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3">
            <Leaf className="size-10 rounded-lg bg-app-cream p-2" />
            <div>
              <p className="text-sm font-semibold text-app-green">
                100% Organic
              </p>
              <p className="text-xs text-app-text-light">Certified products</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3">
            <Clock className="size-10 rounded-lg bg-app-cream p-2" />
            <div>
              <p className="text-sm font-semibold text-app-green">Same Day</p>
              <p className="text-xs text-app-text-light">Express delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3">
            <ShieldCheck className="size-10 rounded-lg bg-app-cream p-2" />
            <div>
              <p className="text-sm font-semibold text-app-green">Secure Pay</p>
              <p className="text-xs text-app-text-light">Safe checkout</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Introduction