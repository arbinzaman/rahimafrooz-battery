
import{ createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../utils/Base Url/axiosInstance";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post("/auth/login", { email, password });
            if (response.data.message === "Login successful") {
                const userData = await axiosInstance.get("/auth/user");
                setUser(userData.data);
            }
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    const logout = async () => {
        try {
            await axiosInstance.post("/auth/logout");
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get("/auth/user");
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user:", error.message);
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
