import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAction } from "../../redux/actions/userAction";
import { postLogin } from "../../utils/api";
import { setTokenInLocalStorage, setUser } from "../../utils/utils";
import Input from "./input";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = {
      email,
      password,
    };
    postLogin(form).then((result) => {
      setTokenInLocalStorage(result.data.token)
      dispatch(setUserAction(setUser(result.data.user)))
      navigate("/")
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email"
        label="email"
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={onEmailInput}
        value={email}
      ></Input>
      <Input
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onPasswordInput}
        value={password}
      ></Input>
      <button className="w-full py-2 bg-zinc-800 text-white mt-4">
        로그인
      </button>
    </form>
  );
};

export default Login;
