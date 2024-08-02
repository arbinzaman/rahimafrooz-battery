import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import Cookies from "js-cookie";

const RestricIfLoggedInRoute = ({ children }) => {
  const { user, loading } = useUser();
  const token = Cookies.get("token");
  
  const location = useLocation();

  if (loading) {
    return;
  }
  if (!user || !token) {
    return children;
  }
  
  return (
    <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
  );
};

export default RestricIfLoggedInRoute;