"use client";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto px-5 py-16">
      <h2 className="text-5xl font-bold mb-4">About</h2>
      <p className="my-5 leading-8">
        This website is built with{" "}
        <Link
          href="https://vercel.com/templates/next.js/nextjs-commerce"
          className="underline"
        >
          Next.js Commerce
        </Link>
        , which is a ecommerce template for creating a headless Shopify
        storefront.
      </p>
      <p className="my-5 leading-8">
        Support for real-world commerce features including:
      </p>
      <ul className="list-disc pl-10">
        <li className="py-1">Out of stocks </li>
        <li className="py-1">Order history </li>
        <li className="py-1">Order status </li>
        <li className="py-1">
          Cross variant / option availability (aka. Amazon style){" "}
        </li>
        <li className="py-1">Hidden products</li>
        <li className="py-1">
          Dynamically driven content and features via Shopify (ie. collections,
          menus, pages, etc.){" "}
        </li>
        <li className="py-1">
          Seamless and secure checkout via Shopify Checkout
        </li>
        <li className="py-1">And more!</li>
      </ul>
      <p className="my-5 leading-8">
        This template also allows us to highlight newer Next.js features
        including:
      </p>
      <ul className="list-disc pl-10 mb-5">
        <li className="py-1">Next.js App Router</li>
        <li className="py-1">Optimized for SEO using Next.js's Metadata</li>
        <li className="py-1">React Server Components (RSCs) and Suspense</li>
        <li className="py-1">Server Actions for mutations</li>
        <li className="py-1">Edge runtime</li>
        <li className="py-1">New Next.js 13 fetching and caching paradigms</li>
        <li className="py-1">Dynamic OG images</li>
        <li className="py-1">Styling with Tailwind CSS</li>
        <li className="py-1">
          Automatic light/dark mode based on system settings
        </li>
        <li className="py-1">And more!</li>
      </ul>
      <span className="text-sm italic">
        This document was last updated on July 18, 2023.
      </span>
    </div>
  );
};

export default About;
