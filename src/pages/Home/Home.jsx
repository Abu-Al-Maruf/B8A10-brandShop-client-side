import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "./Banner";
import Footer from "../shared/Footer";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
