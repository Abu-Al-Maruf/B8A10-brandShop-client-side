import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black/60" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black/60" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black/60" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black/60" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-black/50 flex justify-between items-center py-4 px-6 ">
      <div className="flex justify-center items-center">
        <IoMenu
          onClick={() => setShowMenu(true)}
          className="text-5xl cursor-pointer sm:hidden"
        />
        <Link
          className=" text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 pl-4"
          to={"/"}
        >
          Brand Shop
        </Link>
      </div>
      {/* mobile responsive menu  */}
      <div
        className={`sm:hidden flex flex-col gap-6 bg-green-600 h-screen text-white  fixed left-0 top-0 p-10 transition-all  ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <IoClose
          onClick={() => setShowMenu(false)}
          className="text-3xl self-end cursor-pointer sm:hidden"
        />
        <ul className="flex flex-col gap-2">{navLinks}</ul>
      </div>
      {/* mobile responsive menu  end */}
      <div className="flex items-center justify-between gap-20 ">
        <ul className="sm:flex gap-5 text-lg text-gray-100 font-medium hidden">
          {navLinks}
        </ul>
        <div>
          <img
            className="w-12 cursor-pointer rounded-full"
            src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
