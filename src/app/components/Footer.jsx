"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const segment = usePathname();
  return (
    <div className="bg-[#171717] w-full pt-10">
      <ul className="lg:text-sm font-bold px-20 border-t border-neutral-600 pt-10 mb-10 lg:mx-28 ">
        <li className="p-2 ">
          <Link
            href="/"
            className={`${
              segment === "/" ? "text-white" : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            Home
          </Link>
        </li>
        <li className="p-2 ">
          <Link
            href="/About"
            className={`${
              segment === "/About" ? "text-white" : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            About
          </Link>
        </li>
        <li className="p-2 ">
          <Link
            href="/Terms&Conditions"
            className={`${
              segment === "/Terms&Conditions"
                ? "text-white"
                : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            Terms & Conditions
          </Link>
        </li>
        <li className="p-2 ">
          <Link
            href="/Shipping&ReturnPolicy"
            className={`${
              segment === "/Shipping&ReturnPolicy"
                ? "text-white"
                : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            Shipping & Return Policy
          </Link>
        </li>
        <li className="p-2 ">
          <Link
            href="/PrivacyPolicy"
            className={`${
              segment === "/PrivacyPolicy" ? "text-white" : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            Privacy Policy
          </Link>
        </li>
        <li className="p-2 ">
          <Link
            href="/FAQ"
            className={`${
              segment === "/FAQ" ? "text-white" : "text-neutral-500 "
            } hover:text-white pb-1 hover:border-b hover:border-white`}
          >
            FAQ
          </Link>
        </li>
      </ul>
      <div className="text-neutral-500  p-5 border-t border-neutral-500 flex text-xl">
        <p className="mr-8"> Created By Ali Mohebbi</p>
        <div>
          <Link
            href="https://www.linkedin.com/in/ali-mohebbi-7165b7265/"
            className="text-neutral-500  hover:text-white mr-5"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link
            href="https://github.com/Ali-Mohebbi-Developer"
            className="text-neutral-500 hover:text-white"
          >
            <i className="bi bi-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
