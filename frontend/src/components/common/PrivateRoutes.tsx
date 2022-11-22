import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const userState = useSelector((state: any) => state.user);

  return userState.isLogin ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
