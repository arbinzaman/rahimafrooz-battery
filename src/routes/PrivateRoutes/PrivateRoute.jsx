import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useUser();
  const token = Cookies.get("XTOKEN");
  // console.log(token)
  const location = useLocation();

  if (loading) {
    return;
  }
  if (user || token) {
    return children;
  }

  return (
    <Navigate to="/admin-login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
