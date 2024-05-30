import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
           <Banner brands={brands}></Banner>
        </div>
    );
};

export default Home;