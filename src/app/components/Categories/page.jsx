"use client";
import Link from "next/link";
import React from "react";

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const categories = [
    "All",
    "Bags",
    "Drinkware",
    "Electronics",
    "Footwear",
    "Headwear",
    "Hoodies",
    "Jackets",
    "Kids",
    "Pets",
    "Shirts",
    "Stickers",
  ];

  return (
    <ul className="text-neutral-400 text-sm flex flex-col">
      {categories.map((category) => (
        <li
          key={category}
          className={`hover:text-white hover:font-bold cursor-pointer my-2 ${
            category === selectedCategory && "text-white , font-bold"
          }`}
        >
          <Link
            href={`Search?category=${category}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
