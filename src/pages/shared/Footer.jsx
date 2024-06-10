import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Footer = () => {
  const {darkMode } = useContext(AuthContext);

  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-gray-200' :'bg-gray-200'} footer items-start p-10 sm:p-20 bg-gray-200 text-base-content`}>
      <aside>
        <Link
          className=" text-xl mt-12 sm:text-2xl lg:text-3xl font-semibold text-gray-600 pl-4"
          to={"/"}
        >
          Brand Shop
        </Link>
        <span>©️ 2024 Brand Shop. All Rights Reserved.</span>
      </aside>
      <nav>
        <h6 className="footer-title">Our Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">About us</h6>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Location</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
