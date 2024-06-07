import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen items">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-xs"></span>
       
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
export default PrivateRoute;
