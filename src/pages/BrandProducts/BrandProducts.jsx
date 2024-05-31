import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const BrandProducts = () => {
  const { brand } = useParams();
  const loadedBrands = useLoaderData();
  const [brands, setBrand] = useState(loadedBrands);

  useEffect(() => {
    const findBrand = loadedBrands.filter(
      (brnd) => brnd.brand.toLowerCase() === brand.toLowerCase()
    );
    setBrand(findBrand);
  }, [brand, loadedBrands]);

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
    <div className="p-5">
      <h1 className="text-3xl text-center p-5">{brand}</h1>

      <Slider {...settings} className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <img
            src="https://media.wired.com/photos/62586aa25267e2760229c7f6/master/w_1600,c_limit/Samsung-Galaxy-A53-5G-Top-Gear.jpg"
            alt="Advertisement 1"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full p-1">
            <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-black to-transparent p-2 rounded">
              Special Offer
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/4617565053/samsung-galaxy-s22-ultra.jpeg"
            alt="Advertisement 2"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full p-1">
            <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-black to-transparent p-2 rounded">
              New Arrival
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/24/full/1713938151-1724.jpg?im=FeatureCrop,size=(826,465)"
            alt="Advertisement 3"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full p-1">
            <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-black to-transparent p-2 rounded">
              Limited Time Offer
            </h2>
          </div>
        </div>
      </Slider>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
        {brands.map((product) => (
          <BrandProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
