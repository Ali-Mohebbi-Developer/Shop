"use client";
import React, { useState, useEffect, Suspense } from "react";
import useStore from "../Store/Store";
import Categories from "../Categories/page";
import ProductCards from "../ProductCards/page";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  const { products, fetchProducts } = useStore();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const query = searchParams.get("query") || "";

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = products
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    )
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen h-full flex p-5 w-full">
      <div className="flex justify-between ">
        <Categories
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pl-5 lg:pl-10 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/components/ProductDetails/${product.id}`}
            >
              <ProductCards
                src={Object.values(product.variants)[0].image}
                name={product.name}
                price={product.price + ".00"}
                style={{ height: "300px" }}
              />
            </Link>
          ))
        ) : (
          <div className="text-center w-full text-white">
            No products found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

const Search = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchContent />
  </Suspense>
);

export default Search;
