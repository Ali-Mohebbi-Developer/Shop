"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useStore from "../Store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import ProductsCards from "../ProductCards/page";

const Products = () => {
  const { products, fetchProducts } = useStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const firstThreeProducts = products.slice(0, 3);
  const remainProducts = products.slice(3);

  return (
    <div className="flex-col lg:block mx-auto lg:px-0">
      <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:h-[540px]">
        <div className="flex-1 h-full lg:h-auto">
          {firstThreeProducts[0] && (
            <Link
              href={`/components/ProductDetails/${firstThreeProducts[0].id}`}
            >
              <ProductsCards
                name={firstThreeProducts[0].name}
                price={firstThreeProducts[0].price + ".00"}
                src={Object.values(firstThreeProducts[0].variants)[0].image}
                style={{ height: "100%" }}
                isStyle={true}
              />
            </Link>
          )}
        </div>
        <div className="flex-none w-full lg:w-1/3 flex flex-col gap-4 h-full">
          {firstThreeProducts.slice(1).map((item) => (
            <Link key={item.id} href={`/components/ProductDetails/${item.id}`}>
              <ProductsCards
                name={item.name}
                price={item.price + ".00"}
                src={Object.values(item.variants)[0].image}
                style={{ height: "calc((540px - 16px) / 2)" }}
                isStyle={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Swiper
          modules={[Autoplay, Mousewheel, FreeMode]}
          spaceBetween={4}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Adjust the delay as needed
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          mousewheel={true}
          freeMode={true}
          loop={false} // Set loop to false
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="h-[200px] sm:h-[250px] md:h-[300px]"
        >
          {remainProducts.length > 0 ? (
            remainProducts.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <Link
                  href={`/components/ProductDetails/${item.id}`}
                  className="h-full block mx-1.5"
                >
                  <ProductsCards
                    name={item.name}
                    price={item.price + ".00"}
                    src={Object.values(item.variants)[0].image}
                    style={{ height: "100%" }}
                    isStyle={false}
                  />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>No products available</p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
