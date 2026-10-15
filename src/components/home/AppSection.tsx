
const AppSection = () => {
  return (
    <div>
      <section className="m-auto rounded-3xl bg-green-950 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10 lg:px-16 lg:py-14">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Get fresh groceries in minutes
            </h1>

            <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              Download the InstantMart app for exclusive deals, real-time
              tracking, and the freshest selection delivered right to your door.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start gap-4 mt-8">
              <button className="w-fit bg-white text-green-950 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition">
                <i className="fa-brands fa-apple text-xl"></i>
                App Store
              </button>

              <button className="w-fit bg-white/10 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition">
                <i className="fa-brands fa-google-play text-xl"></i>
                Google Play
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
            <img
              src="public/delivery_truck-BvY4lSkI.svg"
              alt="Delivery Truck"
              className="max-w-60 sm:max-w-120 xl:pr-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppSection