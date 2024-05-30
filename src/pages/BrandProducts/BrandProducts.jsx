import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    const {id} = useParams();
    const brands = useLoaderData();
    const [brand, setBrand] = useState('');
    console.log(id)

    useEffect(() => {
      const findBrand = brands.find((brand) => brand.id == id);
      setBrand(findBrand);
    }, [id, brands]);
  

    return (
        <div>
            <h1 className="text-3xl text-center p-5">{brand.name}</h1>
        </div>
    );
};

export default BrandProducts;