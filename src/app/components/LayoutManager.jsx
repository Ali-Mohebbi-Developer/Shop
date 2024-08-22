"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutManager({ children }) {
  const pathname = usePathname();
  const isCheckoutPage = pathname === "/components/Sell";

  return (
    <>
      {!isCheckoutPage && <Header />}
      <main className="bg-[#171717] text-white">{children}</main>
      {!isCheckoutPage && <Footer />}
    </>
  );
}
