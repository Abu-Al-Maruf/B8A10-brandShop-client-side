import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/BrandProducts/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://a10-brand-shop-server-side-chi.vercel.app/brands"),
      },
      {
        path: "/brandProducts/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch("https://a10-brand-shop-server-side-chi.vercel.app/brandProducts"),
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://a10-brand-shop-server-side-chi.vercel.app/brandProducts/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://a10-brand-shop-server-side-chi.vercel.app/brandProducts/${params.id}`),
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("https://a10-brand-shop-server-side-chi.vercel.app/addCart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
