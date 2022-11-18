import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import Popup from "./components/common/Popup";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Place from "./pages/Place";
import UploadPlace from "./pages/UploadPlace";
import UserProfile from "./pages/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Popup />
      <Loading />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="places">
            <Route path="upload" element={<UploadPlace />} />          
            <Route path=":id" element={<Place />} />
          </Route>          
          <Route path="user/:id" element={<UserProfile />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path="auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
