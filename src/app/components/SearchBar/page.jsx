"use client";
import React, { useState } from "react";
import "../../../../font/bootstrap-icons.css";

import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (text.trim()) {
      router.push(
        `/components/Search?query=${encodeURIComponent(text.trim())}`
      );
    }
  };

  return (
    <div
      onFocus={(e) => {
        e.target.parentElement.style.outline = "2px solid #a3a3a3";
      }}
      onBlur={(e) => {
        e.target.parentElement.style.outline = "none";
      }}
      className="border border-neutral-700 rounded-lg w-full py-2 px-4 lg:w-6/12 flex justify-between outline-offset-2 my-5 lg:my-0"
    >
      <input
        type="text"
        className="bg-transparent border-none outline-none text-sm text-white placeholder:text-neutral-500 placeholder:font-bold w-full"
        placeholder="Search for products..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="text-white bg-transparent" onClick={handleSearch}>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
