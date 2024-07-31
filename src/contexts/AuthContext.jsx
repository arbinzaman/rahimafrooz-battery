import  { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/Base Url/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get('/auth/user');
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user:', error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
