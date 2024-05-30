import PropTypes from "prop-types";
const Brands = ({ brands }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center w-full  lg:w-2/3 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Our Brand Shop
        </h1>
        <p className="text-lg  mb-8">
          Discover best product
        </p>

        <div className="grid grid-cols-2  sm:grid-cols-3  gap-y-6 gap-x-10 mb-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 sm:p-6 md:p-10 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <img src={brand.image} className="h-16 mx-auto mb-2" />
              <h2 className="text-lg font-semibold">{brand.name}</h2>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};
export default Brands;
