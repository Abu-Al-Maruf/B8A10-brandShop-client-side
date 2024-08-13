import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const { user } = useContext(AuthContext);
  const { name, image, desc, brand, price, type } = loadedProduct;

  

  const handleAddToCart = () => {
    const email = user?.email;

    const addCartProduct = { name, email, image, brand, price, type };

    fetch("http://localhost:5000/addCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "add to cart successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-blue-100/50 min-h-screen w-full mx-auto p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:gap-4">
        <div className="w-full sm:w-2/3 lg:w-1/2 p-2 sm:p-4 flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-40 sm:w-48 md:w-64 lg:w-80 h-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/2 p-2 sm:p-4 flex flex-col items-center lg:items-start gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center lg:text-left">
            {name}
          </h2>
          <p
            className="text-base text-gray-700 text-center lg:text-left"
            style={{ fontSize: "16px" }}
          >
            {desc}
          </p>
          <p className="text-lg pl-2 text-blue-600 font-medium text-center lg:text-left">
            {brand}
          </p>
          <p className="text-xl pl-2 text-red-500 font-bold text-center lg:text-left">
            {price} Taka
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-5 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 active:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
