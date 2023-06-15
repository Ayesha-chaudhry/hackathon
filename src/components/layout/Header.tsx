"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/Images/Logo.webp";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="py-6 flex justify-between items-center space-x-12 mx-6 lg:mx-32">
      {/* Logo */}
      <div className="w-36 flex-shrink-0">
        <Link href={"/"}>
          <Image
            className=""
            src={Logo}
            alt="logo"
            width={130}
            height={23}
          />
        </Link>
      </div>
      {/* Navigation */}
      <div className="hidden lg:flex justify-between items-center cursor-pointer w-full">
      <ul className={`flex items-center px-3 py-1 font-medium text-lg space-x-6`}>
        <li>
          <a href="/female">Female</a>
        </li>
        <li>
          <a href="/male">Male</a>
        </li>
        <li>
          <a href="/kids">Kids</a>
        </li>
        <li>
          <a href="/products">All Products</a>
        </li>
      </ul>
      
      {/* Searchbar */}
      <div className="flex items-center border rounded-md shrink-0">
        <CiSearch className="m-2" />
        <input
          type="text"
          placeholder="What you looking for?"
          className="w-80 pl-1 py-1"
        />
      </div>
      {/* icons */}
      <div className="md:flex hidden items-center gap-5">
        <button className="shrink-0 border text-sm px-4 py-2 rounded-md hover:bg-[#571eff] hover:text-white transition-all duration-300">
          Sign in
        </button>
        <div className="flex items-center hover:scale-105 duration-300 delay-200 shrink-0">
          <div className="relative h-11 w-11 bg-gray-200 rounded-full flex justify-center items-center">
            <BsCart2 className="text-xl text-bold text-black -mt-1 font-bold" />
            <div className="absolute z-10 top-1 right-2 h-4 w-4 text-xs flex justify-center items-center  bg-[#f02d34] rounded-full text-white">
              o
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Responsive */}
      <div
        className="lg:hidden overflow-hidden"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      {/* Overlay starts here */}
      {/* <div className="h-72 overflow-hidden bg-white lg:hidden absolute z-10 top-16 left-0 right-0 transition-all duration-300 ">
        <ul className="flex flex-col items-center text-lg gap-y-6 py-6 lg:hidden">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <button className="border text-sm px-4 py-2 rounded-md hover:bg-[#571eff] hover:text-white transition-all duration-300">
                Sign in
              </button>
            </div>
            <div className="flex items-center hover:scale-105 duration-300 delay-200">
              <div className="relative bg-gray-200 rounded-full w-11 h-11 flex justify-center items-center">
                <BsCart2 className="text-xl text-bold text-black -mt-1 font-bold" />
                <div className="absolute z-10 top-1 right-2 h-4 w-4 flex justify-center items-center text-sm bg-[#f02d34] rounded-full text-white">
                  o
                </div>
              </div>
            </div>
          </div>
          <li>
            <a href="/female">Female</a>
          </li>
          <li>
            <a href="/male">Male</a>
          </li>
          <li>
            <a href="/kids">Kids</a>
          </li>
          <li>
            <a href="/products">All Products</a>
          </li>
        </ul>
      </div> */}
      {/* Overlay end here */}
    </header>
  );
};

export default Header;
