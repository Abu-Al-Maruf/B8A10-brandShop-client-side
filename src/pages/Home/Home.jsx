import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "./Banner";
import Footer from "../shared/Footer";
import AllProducts from "./AllProducts";
import Offers from "./Offers";
import Testimonials from "./Testimonials";
import Promotional from "./Promotional";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <Promotional></Promotional>
      <AllProducts></AllProducts>
      <Testimonials></Testimonials>
      <Offers></Offers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
