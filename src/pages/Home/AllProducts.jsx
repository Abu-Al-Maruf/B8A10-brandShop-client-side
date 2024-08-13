import { useEffect, useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { darkMode } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const axios = useAxios();
  const itemsPerPage = 6;
  const totalCount = products?.count || 0;

  // for pagination
  const totalPage = Math.ceil(totalCount / itemsPerPage);

  const pages = [...Array(totalPage).keys()].map((n) => n + 1);

  useEffect(() => {
    axios
      .get(`/brandProducts?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [axios, currentPage, itemsPerPage]);

  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className={`${darkMode && "dark"}`}>
      <div className="p-10 sm:px-20 bg-blue-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">
          All Products
        </h1>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.result?.map((product) => (
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
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Brand: {product.brand}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Type: {product.type}
                </p>
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

        <div className="py-10 flex justify-center">
          <div className="flex justify-center gap-2">
            <button onClick={handlePrePage} className="join-item btn btn-sm">
              Pre
            </button>
            {pages.map((page) => (
              <button
                key={page}
                className={
                  currentPage === page
                    ? "bg-green-500 join-item btn btn-sm"
                    : "join-item btn btn-sm"
                }
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage} className="join-item btn btn-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
