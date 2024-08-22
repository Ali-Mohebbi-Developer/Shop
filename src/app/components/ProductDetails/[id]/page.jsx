"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useStore from "../../Store/Store";

const ProductDetails = () => {
  const { products, fetchProducts, addToCart, cart } = useStore();
  const params = useParams();
  const id = params?.id;

  const [loading, setLoading] = useState(true);
  const [selectImg, setSelectImg] = useState(null);
  const [info, setInfo] = useState({
    color: "",
    size: "default",
  });

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [products, fetchProducts]);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const product = products.find((product) => id == product.id);
      if (product) {
        setSelectImg(Object.values(product.variants)[0].image);
        setInfo({
          color: Object.keys(product.variants)[0],
          size: product.variants[Object.keys(product.variants)[0]].size
            ? null
            : "default",
        });
      }
    }
  }, [loading, products, id]);

  const product = products.find((product) => id == product.id);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-5xl">
        Loading ...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-5xl">
        Not Found ...
      </div>
    );
  }

  const handleColorChange = (color) => {
    if (!product.variants[color].disabled) {
      setInfo({
        color: color,
        size: product.variants[color].size ? null : "default",
      });
      setSelectImg(product.variants[color].image);
    }
  };

  const handleSizeChange = (size) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      size: size,
    }));
  };

  const handleAddToCart = () => {
    const newItem = {
      ...product,
      color: info.color || undefined,
      size: info.size || undefined,
      image: product.variants[info.color]?.image,
    };
    const existedInCart = cart.some(
      (item) =>
        item.id == newItem.id &&
        item.color == newItem.color &&
        item.size == newItem.size &&
        item.image == newItem.image
    );
    if (!existedInCart) {
      addToCart(newItem);
    }
  };

  return (
    <div className="text-white min-h-96 mx-5 border border-neutral-800 p-8 rounded-lg bg-black flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-2/3 mb-20 lg:mb-0">
        <figure className="w-full flex justify-center items-center">
          <img className="w-[60%]" src={selectImg} alt={product.name} />
        </figure>
        <div className="flex justify-center items-center mt-4">
          {Object.keys(product.variants).map((item) => (
            <figure
              key={item}
              className={`w-1/12 mx-1 flex justify-center items-center group border border-neutral-800 rounded-lg ${
                selectImg === product.variants[item].image
                  ? "border-2 border-blue-700"
                  : ""
              } hover:border-blue-600 cursor-pointer`}
            >
              <img
                className="object-cover group-hover:scale-105 duration-300"
                src={product.variants[item].image}
                alt={item}
                onClick={() => setSelectImg(product.variants[item].image)}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="text-white p-5 w-full lg:w-1/3">
        <div className="pr-10 font-bold border-b border-neutral-700">
          <h2 className="text-5xl">{product.name}</h2>
          <p className="w-[70px] h-[16px] bg-[#2563EB] mt-3 mb-6 flex items-center justify-center px-12 py-4 rounded-full text-sm font-bold">
            ${product.price}.00 <span className="ms-1">USD</span>
          </p>
        </div>

        {Object.keys(product.variants).length > 1 && (
          <div className="my-5">
            <h3 className="text-sm font-bold">COLOR</h3>
            <div className="flex space-x-2">
              {Object.keys(product.variants).map((color) => (
                <button
                  key={color}
                  className={`rounded-full my-3 text-sm flex justify-center items-center bg-neutral-900 border-2 border-neutral-800 hover:border-blue-700 duration-300 cursor-pointer px-3 py-1 ${
                    info.color === color
                      ? "border-blue-700"
                      : product.variants[color].disabled
                      ? "text-gray-500 bg-neutral-900 cursor-not-allowed hover:border-neutral-800"
                      : "cursor-pointer"
                  }`}
                  onClick={() => handleColorChange(color)}
                  disabled={product.variants[color].disabled}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.variants[info.color]?.size && (
          <div className="my-5 flex flex-col pr-10">
            <h3 className="text-sm font-bold">SIZE</h3>
            <div className="flex flex-wrap ">
              {Object.keys(product.variants[info.color].size).map((size) => (
                <button
                  key={size}
                  className={`rounded-full my-2 text-sm flex  mr-2 justify-center items-center bg-neutral-900 border-2 border-neutral-800 hover:border-blue-700 duration-300 cursor-pointer px-3 py-1 ${
                    product.variants[info.color].size[size]
                      ? info.size === size
                        ? "border-blue-700"
                        : "cursor-pointer"
                      : "text-gray-500 bg-neutral-900 cursor-not-allowed hover:border-neutral-800"
                  }`}
                  onClick={() =>
                    product.variants[info.color].size[size]
                      ? handleSizeChange(size)
                      : null
                  }
                  disabled={!product.variants[info.color].size[size]}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          {product.des && (
            <p className="text-sm text-neutral-400 font-bold my-5">
              {Object.values(product.des)}
            </p>
          )}
          {product.more && (
            <ul className="list-disc pl-5 text-sm text-neutral-400 font-bold my-5">
              {product.more.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {product.category !== "Electronics" ? (
            <button
              onClick={handleAddToCart}
              className={`text-white flex my-5 justify-center items-center relative bg-blue-600 w-full py-4 rounded-full duration-200
                ${
                  info.color && info.size
                    ? "cursor-pointer opacity-100 hover:bg-blue-700"
                    : "cursor-not-allowed opacity-50"
                }
                `}
              disabled={!(info.color && info.size)}
            >
              <span className="text-3xl absolute left-5 top-[50%] -translate-y-1/2">
                <i className="bi bi-plus"></i>
              </span>
              <p>Add To Cart</p>
            </button>
          ) : (
            <button className="text-white flex my-5 justify-center items-center relative bg-blue-600 opacity-50 w-full py-4 rounded-full cursor-not-allowed">
              Out Of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
