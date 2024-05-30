import PropTypes from "prop-types";
const Banner = ({ brands }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center w-full  lg:w-2/3 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Our Brand Shop
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover Quality, Discover Excellence
        </p>

        <div className="grid grid-cols-2  sm:grid-cols-3  gap-6 mb-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 sm:p-6 md:p-10 bg-white rounded-lg shadow-md"
            >
              <img src={brand.image} className="h-16 mx-auto mb-2" />
              <h2 className="text-lg font-semibold">{brand.name}</h2>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-blue-700">
          Shop Now
        </button>
      </div>
    </section>
  );
};

Banner.propTypes = {
  brands: PropTypes.array,
};
export default Banner;
