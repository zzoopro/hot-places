import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPlace from "./pages/AddPlace";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import UserProfile from "./pages/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/place/add" element={<AddPlace />}></Route>
        <Route path="/user/:id" element={<UserProfile />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
