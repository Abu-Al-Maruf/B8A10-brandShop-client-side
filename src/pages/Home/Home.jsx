import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "./Banner";
import Footer from "../shared/Footer";
import AllProducts from "./AllProducts";
import Features from "./Features";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <AllProducts></AllProducts>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
