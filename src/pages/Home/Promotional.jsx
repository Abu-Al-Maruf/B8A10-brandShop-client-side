

const Promotional = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 px-6"
      style={{
        backgroundImage:
          "url('https://mlckguqn3ubl.i.optimole.com/cb:kl_A~21c25/w:auto/h:auto/q:90/f:best/ig:avif/https://www.voicesage.com/wp-content/uploads/2022/08/mobile-technology.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center p-10 rounded-lg">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-400 mb-6 leading-tight">
          Upgrade Your Tech Game
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-light italic mb-6">
          Find the latest smartphones at unbeatable prices and experience next-level innovation.
        </p>
        <ul className="text-gray-300 text-base md:text-lg mb-10 space-y-4">
          <li>
            <i className="fa-solid fa-check text-green-400 mr-2"></i>
            <span className="text-yellow-300 font-medium">
              Exclusive deals
            </span>{" "}
            on Apple, Samsung, and Xiaomi devices.
          </li>
          <li>
            <i className="fa-solid fa-check text-green-400 mr-2"></i>
            Trade-in your old phone for instant discounts of up to{" "}
            <span className="text-red-400 font-semibold">$200</span>.
          </li>
          <li>
            <i className="fa-solid fa-check text-green-400 mr-2"></i>
            Enjoy <span className="text-purple-300 font-bold">free shipping</span> on orders over{" "}
            <span className="text-white">$50</span>.
          </li>
        </ul>
        <button
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-lg text-base font-bold shadow-lg hover:shadow-2xl transition-all md:px-10 md:py-4 md:text-xl"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Promotional;
