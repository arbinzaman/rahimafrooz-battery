import { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../utils/Base Url/axiosInstance";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useUser = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        { email, password }
      );
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: response?.data?.username,
            email: response?.data?.email,
            role: response?.data?.role,
          })
        );
        Cookies.set("token", response.data.token);
        setUser(JSON.parse(localStorage.getItem("user")));
        return 200;
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axiosInstance.get("/auth/user");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch user:", error.message);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
