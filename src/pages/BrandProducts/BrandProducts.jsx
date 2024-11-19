import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";
import BrandSlider from "./BrandSlider";

const BrandProducts = () => {
  const { brand } = useParams();
  const loadedBrands = useLoaderData();
  const [brands, setBrands] = useState([]);
  console.log(loadedBrands);

  useEffect(() => {
    const findBrand = loadedBrands?.result.filter(
      (brnd) => brnd.brand.toLowerCase() === brand.toLowerCase()
    );
    setBrands(findBrand);
  }, [brand, loadedBrands]);

  return (
    <div className="p-5 sm:p-10 lg:p-16">
      <h1 className="text-3xl text-center p-5">{brand}</h1>

      <BrandSlider brand={brand}></BrandSlider>

      {brands.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
          {brands.map((product) => (
            <BrandProductsCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-gray-700">
          No products available
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
