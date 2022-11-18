import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import Popup from "./components/common/Popup";
import PrivateRoutes from "./components/common/PrivateRoutes";
import AddPlace from "./pages/UploadPlace";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserProfile from "./pages/UserProfile";
import Place from "./pages/Place";

const Router = () => {
  return (
    <BrowserRouter>
      <Popup />
      <Loading />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="places">
            <Route path="upload" element={<AddPlace />} />          
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
