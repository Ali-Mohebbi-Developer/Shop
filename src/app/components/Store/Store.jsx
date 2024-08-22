"use client";
import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  cart: [],
  fetchProducts: async () => {
    try {
      const response = await axios.get(
        "https://66a099667053166bcabbf309.mockapi.io/shop"
      );
      set({ products: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.id === product.id &&
            item.color === product.color &&
            item.size === product.size
              ? { ...item, count: item.count + 1 }
              : item
          )
        : [...state.cart, { ...product, count: 1 }];

      return { cart: updatedCart };
    }),
  removeFromCart: (productId, color, size) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) =>
          !(item.id === productId && item.color === color && item.size === size)
      );

      return { cart: updatedCart };
    }),
  inc: (productId, color, size) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId && item.color === color && item.size === size
          ? { ...item, count: item.count + 1 }
          : item
      );

      return { cart: updatedCart };
    }),
  dec: (productId, color, size) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId && item.color === color && item.size === size
          ? { ...item, count: item.count > 1 ? item.count - 1 : item.count }
          : item
      );

      return { cart: updatedCart };
    }),
}));

export default useStore;
