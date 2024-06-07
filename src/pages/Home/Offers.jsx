const Features = () => {
  return (
    <section className="bg-gradient-to-r from-green-300 to-green-600 p-10 sm:p-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Subscribe & Get 10% Discount
          </h2>
          <p className="text-gray-800 font-medium mb-4">
            Subscribe to our Brand Shop to receive exclusive offers, latest
            products, and updates. You&apos;ll also get a 10% discount on your
            next purchase!
          </p>
        </div>
        <form className="lg:w-1/2 p-6 flex flex-col lg:flex-row items-center">
          <input
            type="email"
            className="w-full lg:w-2/3 border bg-gray-100 rounded-md py-2 px-4 mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full lg:w-auto bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Features;
