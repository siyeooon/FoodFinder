// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // TODO: 토큰 저장 및 로그인 후 동작
        console.log("로그인 성공");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("서버 오류", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("회원 가입 성공");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("서버 오류", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">로그인</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          계정이 없으신가요?
          <Link to="/SignUp" className="text-blue-500" onClick={handleSignup}>
            회원가입
          </Link>
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full mt-5">
          Google 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
