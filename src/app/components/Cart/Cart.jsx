"use client";
import React, { useContext, useEffect, useRef } from "react";
import CartContext from "../CartContext/CartContext";
import useStore from "../Store/Store";
import Link from "next/link";

const Cart = () => {
  const { open, setOpen } = useContext(CartContext);
  const { cart, removeFromCart, inc, dec } = useStore();
  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.color, item.size);
  };

  return (
    <div
      className={`h-screen bg-black overflow-hidden z-50 border-s border-neutral-800 p-2 overflow-y-scroll
      ${
        open
          ? "fixed top-0 right-0 translate-x-0"
          : "fixed top-0 right-0 translate-x-full"
      } 
      transition-transform duration-300 
      w-full lg:w-[400px]`}
      ref={cartRef}
    >
      <div className="relative p-4 mb-10">
        <p className="text-white text-xl">My Cart</p>
        <span
          className="flex text-white border border-neutral-500 w-11 h-11 justify-center items-center rounded-md cursor-pointer absolute top-4 right-5"
          onClick={() => setOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="text-white p-4 flex flex-col justify-center items-center ">
          <span className="text-6xl">
            <i className="bi bi-cart"></i>
          </span>
          <p className="my-10 text-2xl font-bold">Your cart is empty</p>
        </div>
      ) : (
        <div className="px-3 flex flex-col justify-between h-full">
          <ul className="text-white ">
            {cart.map((item) => (
              <li
                key={`${item.id}-${item.color}-${item.size}`}
                className=" flex justify-between items-center mb-5 border-b border-neutral-700 pb-5"
              >
                <div className="flex">
                  <figure className="relative border border-neutral-800 rounded-md w-16 h-16 mr-2">
                    <img
                      className="rounded-md bg-neutral-900 hover:bg-neutral-800"
                      src={item.image}
                      alt={item.name}
                    />
                    <figcaption className="absolute top-0 left-0 bg-neutral-500 w-5 h-5 rounded-full flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
                      <button
                        className="cursor-pointer text-neutral-900"
                        onClick={() => handleRemoveItem(item)}
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    </figcaption>
                  </figure>
                  <div className="flex flex-col">
                    <p className="text-white font-bold">{item.name}</p>
                    <p className="text-neutral-500 text-sm font-bold">
                      {item.color !== "default" ? item.color : ""}
                      {item.size !== "default" ? " / " + item.size : ""}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="mb-1">${item.price}.00 USD</p>
                  <div className="flex justify-between items-center border-2 border-neutral-600 rounded-full w-24 py-1">
                    <span
                      onClick={() => dec(item.id, item.color, item.size)}
                      className={`cursor-pointer text-neutral-600 hover:text-neutral-700 duration-200 px-1 ${
                        item.count === 1
                          ? "text-neutral-400 cursor-not-allowed"
                          : ""
                      }`}
                      style={{
                        pointerEvents: item.count === 1 ? "none" : "auto",
                      }}
                    >
                      <i className="bi bi-dash"></i>
                    </span>
                    <p>{item.count}</p>
                    <span
                      onClick={() => inc(item.id, item.color, item.size)}
                      className="cursor-pointer text-neutral-600 hover:text-neutral-700 duration-200 px-1"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full text-neutral-500 font-bold mb-[100px]">
            <div className="flex justify-between border-b border-neutral-700 my-3 pb-2">
              <p>Taxes</p>
              <span className="text-white">
                $0.00 <span className="ml-2">USD</span>
              </span>
            </div>
            <div className="flex justify-between border-b border-neutral-700 my-3 pb-2">
              <p>Shipping</p>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between border-b border-neutral-700 my-3 pb-2">
              <p>Total</p>
              <span className="text-white">
                <span>$</span>
                {cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
                .00
                <span className="ml-2">USD</span>
              </span>
            </div>
            <Link href="/components/Sell">
              <button className="w-full py-2 mt-3 text-white bg-blue-600 rounded-md">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
