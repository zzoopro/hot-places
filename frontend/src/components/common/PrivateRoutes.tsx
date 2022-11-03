import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoutes = () => {
  const isLogin = false;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
