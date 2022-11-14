import { useState } from "react";
import Login from "../components/auth/login";
import SignUp from "../components/auth/signup";
import Layout from "../components/common/Layout";
import { cls } from "../utils/utils";

const Auth = () => {
  const [authType, setAuthType] = useState("login");
  return (
    <Layout isNav={true}>
      {authType === "login" ? <Login /> : <SignUp />}
      <div id="tab" className="flex w-full mt-4">
        <button
          className={cls(
            "w-1/2 text-white py-2",
            authType === "login" ? "bg-orange-500" : "bg-slate-800"
          )}
          onClick={() => setAuthType("login")}
        >
          로그인
        </button>
        <button
          className={cls(
            "w-1/2 text-white py-2",
            authType === "signup" ? "bg-orange-500" : "bg-slate-800"
          )}
          onClick={() => setAuthType("signup")}
        >
          회원가입
        </button>
      </div>
    </Layout>
  );
};

export default Auth;
