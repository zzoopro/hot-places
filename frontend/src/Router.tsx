import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/common/PrivateRoutes";
import AddPlace from "./pages/AddPlace";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserProfile from "./pages/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/place/add" element={<AddPlace />}></Route>
          <Route path="/user/:id" element={<UserProfile />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
