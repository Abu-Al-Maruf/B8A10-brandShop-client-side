import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSlider = ({ brand }) => {
  const [specificBrand, setSpecificBrand] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        const foundBrand = data.find(
          (brnd) => brnd.name.toLowerCase() === brand.toLowerCase()
        );
        setSpecificBrand(foundBrand);
      });
  }, [brand]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="max-w-2xl mx-auto mb-8">
      {specificBrand?.advertisement_img.map((brand, index) => (
        <div key={index} className="relative">
          <img
            src={brand.image}
            className="w-full h-auto rounded-lg max-h-[380px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full p-1">
            <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-black to-transparent p-2 rounded">
              New Arrival
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};
BrandSlider.propTypes = {
  brand: PropTypes.string,
};
export default BrandSlider;
