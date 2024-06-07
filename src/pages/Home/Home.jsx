import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "./Banner";
import Footer from "../shared/Footer";
import AllProducts from "./AllProducts";
import Offers from "./Offers";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <AllProducts></AllProducts>
      <Offers></Offers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
