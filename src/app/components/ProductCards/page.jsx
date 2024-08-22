"use client";
import React from "react";

const ProductsCards = ({ src, name, price, style, isStyle }) => {
  return (
    <figure
      className={`group  border-[1px] border-neutral-800 hover:border-blue-600 flex justify-center items-center relative overflow-hidden bg-black rounded-lg duration-300 ${
        isStyle && "custom"
      }`}
      style={style}
    >
      <img
        src={src}
        alt="Product"
        className="w-[55%] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <figcaption className=" absolute left-5 bottom-5 flex items-center rounded-full border border-neutral-800 p-2 text-sm font-black	 bg-black bg-opacity-50 pointer-events-none">
        <span className="ps-1">{name}</span>
        <p className="w-[70px] h-[16px] bg-[#2563EB] ms-5 flex items-center justify-center px-10 py-3 rounded-full text-xs">
          ${price} <span className="ms-1">USD</span>
        </p>
      </figcaption>
    </figure>
  );
};

export default ProductsCards;
