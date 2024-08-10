import { useEffect, useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const productsToShow = showAll ? allProducts : allProducts.slice(0, 8);
  const { darkMode } = useContext(AuthContext);
  console.log('alllll', productsToShow);

  useEffect(() => {
    fetch("http://localhost:5000/brandProducts", {credentials: 'include'})
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <section className={`${darkMode && "dark"}`}>
      <div className="p-10 sm:px-20 bg-blue-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">All Products</h1>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsToShow?.map((product) => (
            <Link
              to={`/productDetails/${product._id}`}
              key={product._id}
              className="bg-white dark:bg-gray-600 shadow-md rounded-md overflow-hidden transform hover:scale-[.98] transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-44 mx-auto py-2"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">Brand: {product.brand}</p>
                <p className="text-gray-600 dark:text-gray-300">Type: {product.type}</p>
                <div className="flex items-center mb-2 text-xl sm:text-2xl">
                  <StarRatings
                    rating={parseFloat(product?.rating) || 0}
                    starRatedColor="#ffc22d"
                    starDimension="20px"
                    starSpacing="2px"
                    numberOfStars={5}
                    emptyStar={<IoMdStarOutline />}
                    starRatedIcon={<IoMdStar />}
                  />
                  <span className="text-gray-700 dark:text-gray-300 ml-2 text-md sm:text-lg">
                    {product.rating}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-300 font-bold mt-2">
                  Price: ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {showAll ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowAll(false)}
            >
              See Less
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 mx-auto rounded"
              onClick={() => setShowAll(true)}
            >
              Show All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
