"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="text-neutral-500 text-sm mt-5 lg:mt-0 flex flex-col lg:flex-row gap-6">
      <li className="font-bold hover:text-white hover:border-b hover:border-white ">
        <Link href="/components/Search?category=All">All</Link>
      </li>
      <li className="font-bold hover:text-white hover:border-b hover:border-white ">
        <Link href="/components/Search?category=Shirts">Shirts</Link>
      </li>
      <li className="font-bold hover:text-white hover:border-b hover:border-white ">
        <Link href="/components/Search?category=Stickers">Stickers</Link>
      </li>
    </ul>
  );
};

export default Navbar;
