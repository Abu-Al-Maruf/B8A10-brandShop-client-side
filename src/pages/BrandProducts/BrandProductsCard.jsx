import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Rating from "react-rating";

const BrandProductsCard = ({ product }) => {
  console.log(product);
  const { name, image, brand, price, rating, type } = product;
  return (
    <div className="border rounded-lg shadow-lg">
      <div className="max-w-56 h-auto mx-auto py-4">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="p-2 sm:p-4">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-gray-500 mb-1 text-lg ">
          <span className="font-semibold">Brand</span>: {brand}
        </p>
        <p className="text-gray-500 mb-1 text-lg ">
          <span className="font-semibold">Type</span>: {type}
        </p>
        <p className="text-gray-500 mb-1 text-lg ">
          <span className="font-semibold">Price</span>: {price}&#2547;
        </p>
        <div className="flex items-center mb-2 text-2xl">
          <Rating
            readonly
            className="text-yellow-500"
            initialRating={rating}
            emptySymbol={<IoMdStarOutline />}
            fullSymbol={<IoMdStar />}
          />
          <span className="text-gray-700 ml-2 text-lg">{rating}</span>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-3 py-2 font-semibold hover:scale-95 transition-all rounded hover:bg-blue-600">
            Details
          </button>
          <button className="bg-green-500 text-white px-3 py-1 rounded font-semibold hover:scale-95 transition-all hover:bg-green-600">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandProductsCard;
