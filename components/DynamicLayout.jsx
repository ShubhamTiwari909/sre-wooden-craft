"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DynamicLayout = ({children}) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/login" ? (
        <body>{children}</body>
      ) : (
        <body>
          <Header />
            <main className="mt-24">{children}</main>
          <Footer />
        </body>
      )}
    </>
  );
};

export default DynamicLayout;
