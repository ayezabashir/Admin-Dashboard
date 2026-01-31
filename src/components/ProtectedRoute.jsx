import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("token");
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
