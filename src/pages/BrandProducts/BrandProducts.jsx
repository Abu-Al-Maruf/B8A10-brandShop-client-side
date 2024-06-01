import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";

import BrandSlider from "./BrandSlider";

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

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center p-5">{brand}</h1>

      <BrandSlider brand={brand}></BrandSlider>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
        {brands.map((product) => (
          <BrandProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
