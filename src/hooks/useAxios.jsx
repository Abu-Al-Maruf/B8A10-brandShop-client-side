import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuth();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error of axios", error);

        if (
          error?.response?.status === 401 ||
          error?.response?.status === 401
        ) {
          logOut();
        }
      }
    );
  }, [logOut]);

  return instance;
};

export default useAxios;
