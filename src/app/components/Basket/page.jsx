"use client";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../CartContext/CartContext";
import useStore from "../Store/Store";

const Basket = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useStore();

  const cartItems = cart.length;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="text-white border border-neutral-700 w-11 h-11 flex justify-center items-center rounded-md cursor-pointer relative"
        onClick={handleClick}
      >
        <i className="bi bi-cart"></i>
        {cartItems > 0 && (
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-md w-4 h-4 flex items-center justify-center">
            {cartItems}
          </span>
        )}
      </div>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <CartContext.Provider value={{ open, setOpen }}>
        <Cart />
      </CartContext.Provider>
    </>
  );
};

export default Basket;
