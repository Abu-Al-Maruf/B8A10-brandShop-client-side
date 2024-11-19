
import { useContext } from 'react';
import banner from '../../assets/banner.jpeg';
import { AuthContext } from '../../providers/AuthProvider';

const Banner = () => {
  const {  darkMode } = useContext(AuthContext);

  return (
    <div
      className={` ${darkMode && "dark"} hero h-screen max-h-[1000px]`}
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl flex flex-col items-center">
          <h1 className="mb-5 text-4xl font-bold">Discover Latest Technology and Electronics</h1>
          <p className="mb-5  max-w-md">Explore our wide range of products from top brands like Apple, Samsung, Sony, Google, Intel, and more.</p>
          <button
          className="px-8 py-3 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-base font-bold shadow-lg hover:shadow-2xl duration-1000"
        >
          Shop Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
