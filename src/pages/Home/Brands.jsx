import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Brands = ({ brands }) => {
  const { darkMode } = useContext(AuthContext);
  console.log(brands);

  return (
    <section className={`${darkMode && "dark"}`}>
      <div className={`bg-gray-100 dark:bg-gray-800 py-8`}>
        <div className="container mx-auto text-center w-full lg:w-2/3 px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 dark:text-white">
            Welcome to Our Brand Shop
          </h1>
          <p className="text-lg mb-8 dark:text-gray-300">
            Buy our best products
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 sm:gap-x-10 gap-x-3 mb-8">
            {brands.map((brand) => (
              <Link
                to={`/brandProducts/${brand.name}`}
                key={brand._id}
                className="p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-600 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                <img src={brand.image} className="h-16 mx-auto mb-2" />
                <h2 className="text-lg font-semibold dark:text-white">
                  {brand.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
