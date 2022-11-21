import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
import { resetUserAction, setUserAction } from "../../redux/actions/userAction";
import { getTokenInLocalStorage } from "../../utils/utils";

const PrivateRoutes = () => {
  const userState = useSelector((state: any) => state.user)    
  
  return userState.isLogin ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
