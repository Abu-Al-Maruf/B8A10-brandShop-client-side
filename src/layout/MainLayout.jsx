import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-lato">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
