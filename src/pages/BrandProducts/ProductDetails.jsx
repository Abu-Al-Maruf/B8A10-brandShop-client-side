import {  useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    // const {id} = useParams()
    const loadedProducts = useLoaderData()
    console.log(loadedProducts)
   



    return (
        <div>
            {}
        </div>
    );
};

export default ProductDetails;