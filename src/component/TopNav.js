import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-['pretendard'] max-w-[1520px] flex items-center justify-between py-10">
      <Link to="/" className="font-bold text-xl sm:text-2xl lg:text-3xl px-2">
        Food
        <span className="text-green-700">Finder</span>
      </Link>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] ms:w-[300px] lg:w-[400px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="재료, 음식, 레시피"
        />
      </div>
      <div className="flex items-center text-sm lg:text-base px-2 md:px-0 leading-5 mx-2">
        <div className="hidden md:flex">
          <Link
            to="/Recipe"
            className="p-2 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            레시피
          </Link>
          <Link
            to="/Stuff"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            내 재료
          </Link>
          <Link
            to="/Community"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            커뮤니티
          </Link>

          <Link
            to="/Login"
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            로그인
          </Link>
        </div>
        <div
          onClick={() => setSideNav(!sideNav)}
          className="cursor-pointer md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>

        {sideNav ? (
          <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            sideNav
              ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setSideNav(!sideNav)}
            size={25}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="mr-4 font-bold font-['pretendard'] my-5 text-3xl p-4">
            Food
            <sapn className="font-bold font-['pretendard'] text-green-700">
              Finder
            </sapn>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
              <li className="font-light font-['pretendard'] text-lg py-4 flex">
                <BsPerson
                  onClick={() => navigate("/login")}
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                로그인하세요
              </li>
              <div
                className="font-light text-xl py-4 flex"
                onClick={() => navigate("/recipe")}
              >
                레시피
              </div>
              <div
                className="font-light text-xl py-4 flex"
                onClick={() => navigate("/community")}
              >
                커뮤니티
              </div>
              <div
                className="font-light text-xl py-4 flex"
                onClick={() => navigate("/notice")}
              >
                공지사항
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
