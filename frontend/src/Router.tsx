import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import Popup from "./components/common/Popup";
import PrivateRoutes from "./components/common/PrivateRoutes";
import AddPlace from "./pages/AddPlace";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserProfile from "./pages/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Popup />
      <Loading />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/place/add" element={<AddPlace />}></Route>
          <Route path="/user/:id" element={<UserProfile />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
