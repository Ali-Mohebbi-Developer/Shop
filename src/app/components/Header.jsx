"use client";
import React, { useState } from "react";
import Navbar from "./Navbar/page";
import SearchBar from "./SearchBar/page";
import Basket from "./Basket/page";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <div className="bg-[#171717] w-full flex justify-between items-center py-4 px-5 relative">
      <div className="hidden lg:flex items-center justify-between w-8/12">
        <Navbar />
        <SearchBar />
      </div>
      <span
        onClick={handleClick}
        className="flex lg:hidden text-white border border-neutral-700 w-11 h-11 justify-center items-center rounded-md cursor-pointer"
      >
        <i className="bi bi-list"></i>
      </span>
      <Basket />
      <BurgerMenu burger={burger} handleClick={handleClick} />
    </div>
  );
};

export default Header;

const BurgerMenu = ({ burger, handleClick }) => {
  return (
    <div
      className={`${
        burger ? "translate-x-0" : "-translate-x-full"
      } transform transition-transform duration-300 flex lg:hidden flex-col items-start fixed top-0 left-0 w-full h-full bg-black px-5 py-4 z-50`}
    >
      <span
        className="flex text-white border border-neutral-500 w-11 h-11 justify-center items-center rounded-md cursor-pointer mb-4"
        onClick={handleClick}
      >
        <i className="bi bi-x-lg"></i>
      </span>
      <SearchBar />
      <Navbar />
    </div>
  );
};
