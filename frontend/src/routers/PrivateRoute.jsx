import LoadingSpinner from "../components/LoadingSpinner";
import { UseAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (user) {
    return children;
  }
  if (loading) return <LoadingSpinner />;
  return <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
