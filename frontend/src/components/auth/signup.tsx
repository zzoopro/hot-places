import React, { useState } from "react";
import { postSignUp } from "../../utils/api";
import Input from "./input";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const onEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };
  const onUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onPhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = {
      email,
      password,
      phone,
      username,
    };
    postSignUp(form);
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
      <Input
        id="usename"
        label="닉네임"
        type="text"
        placeholder="닉네임을 지어주세요"
        onChange={onUsernameInput}
        value={username}
      ></Input>
      <Input
        id="phone"
        label="전화번호"
        type="number"
        placeholder="전화번호를 입력하세요."
        onChange={onPhoneInput}
        value={phone}
      ></Input>
      <button className="w-full py-2 bg-zinc-800 text-white mt-4">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
