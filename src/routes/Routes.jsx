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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/brandProducts/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch("http://localhost:5000/brandProducts"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandProducts/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandProducts/${params.id}`),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/addCart"),
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
