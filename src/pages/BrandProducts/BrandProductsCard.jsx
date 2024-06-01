import StarRatings from "react-star-ratings";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandProductsCard = ({ product }) => {
  const { _id, name, image, brand, price, rating, type } = product;
  // console.log(product)
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
          <StarRatings
            rating={parseFloat(rating)}
            starRatedColor="#ffc22d"
            starDimension="24px"
            starSpacing="2px"
            numberOfStars={5}
            emptyStar={<IoMdStarOutline />}
            starRatedIcon={<IoMdStar />}
          />
          <span className="text-gray-700 ml-2 text-lg">{rating}</span>
        </div>
        <div className="flex justify-between">
          <Link to={`/productDetails/${_id}`}  className="bg-blue-500 text-white px-3 py-2 font-semibold hover:scale-95 transition-all rounded hover:bg-blue-600">
            Details
          </Link>
          <button className="bg-green-500 text-white px-3 py-1 rounded font-semibold hover:scale-95 transition-all hover:bg-green-600">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

BrandProductsCard.propTypes = {
  product: PropTypes.object,
};
export default BrandProductsCard;
