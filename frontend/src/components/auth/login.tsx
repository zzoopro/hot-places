import React, { useState } from "react";
import { postLogin } from "../../utils/api";
import Input from "./input";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

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
    postLogin(form).then((result) => console.log(result));
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
