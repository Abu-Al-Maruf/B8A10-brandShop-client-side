import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { user, logOut, toggleDarkMode, darkMode } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-700" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-700" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-700" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            onClick={() => logOut()}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            LogOut
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700" : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className={`${darkMode && "dark"}`}>
      <nav
        className={` bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg flex justify-between items-center py-4 px-4 md:px-10`}
      >
        <div className="flex justify-center items-center">
          <IoMenu
            onClick={() => setShowMenu(true)}
            className="text-5xl cursor-pointer sm:hidden"
          />
          <Link
            className="hidden md:block text-xl sm:text-2xl lg:text-3xl font-eduTas font-medium pl-4"
            to={"/"}
          >
            Brand Shop
          </Link>
        </div>
        {/* Mobile responsive menu */}
        <div
          className={`sm:hidden flex flex-col gap-6 bg-green-600 h-screen fixed left-0 top-0 p-10 transition-all z-50 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoClose
            onClick={() => setShowMenu(false)}
            className="text-3xl self-end cursor-pointer sm:hidden"
          />
          <ul className="flex flex-col gap-2">{navLinks}</ul>
        </div>
        {/* Mobile responsive menu end */}
        <div className="flex items-center justify-between gap-4">
          <ul className="sm:flex gap-5 text-lg font-medium hidden">
            {navLinks}
          </ul>
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </button>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative"
          >
            <img
              className="w-12 cursor-pointer rounded-full"
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
              }`}
            />
            <div
              className={`flex flex-col w-36 gap-1 font-medium bg-slate-600 text-white shadow-xl rounded justify-center items-center absolute right-0 top-12 py-3 px-4 transition-all z-50 ${
                showProfile ? "flex" : "hidden"
              }`}
            >
              <span className="hover:bg-orange-500 px-2">
                {user && user?.displayName}
              </span>
              <div className="hover:bg-orange-500 px-2">
                {user ? (
                  <>
                    <p>{user?.email}</p>
                    <Link to={"/"} onClick={() => logOut()}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <Link to={"/login"}>Login</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
