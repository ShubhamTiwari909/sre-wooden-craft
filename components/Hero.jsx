"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "./ui/button";

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:justify-between md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Start your journey with{" "}
            <span className="text-blue-600">SRE Wooden Crafts</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of customer.
          </p>

          <div className="mt-7 flex flex-col md:flex-row md:items-stretch gap-4 w-full sm:inline-flex">
            <Link
              className="order-2 md:order-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="/categories"
            >
              Get started
              <FaChevronRight size="1rem" />
            </Link>
            <div className="flex grid-cols-2 gap-x-5 order-1 md:order-2">
              <div className="flex gap-4 items-center xl:w-80 max-xl:w-full bg-slate-100 px-6 py-2 rounded outline outline-transparent">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="focus-visible:ring-blue-600"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <Button variant="outline" onClick={() => console.log(search)}>
                  <AiOutlineSearch size="1.5rem" color="#000000" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            className="rounded-md"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Image Description"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
