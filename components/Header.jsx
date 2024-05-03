"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { useStore } from "@/store/store";
import Dropdown from "./Dropdown";
import { logout } from "../server/authentication";
import { getSession } from "@/lib/utils";

const categories = [
  {
    value: "/categories/category1",
    label: "Category 1",
    link: true,
  },
  {
    value: "/categories/category2",
    label: "Category 2",
    link: true,
  },
  {
    value: "/categories/category3",
    label: "Category 3",
    link: true,
  },
  {
    value: "/categories/category4",
    label: "Category 4",
    link: true,
  },
  {
    value: "/categories/category5",
    label: "Category 5",
    link: true,
  },
  {
    value: "/categories/category6",
    label: "Category 6",
    link: true,
  },
  {
    value: "/categories/category7",
    label: "Category 7",
    link: true,
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const uid = getSession("uid");

  useEffect(() => {
    if (!uid) {
      router.push("/login");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [uid]);

  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 w-full z-100">
      <div className="flex flex-wrap items-center gap-5 w-full">
        <Link href="#">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>
        <div
          id="collapseMenu"
          className={`${
            openMenu ? "" : "max-lg:-translate-x-full"
          } lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <Button
            onClick={() => setOpenMenu(!openMenu)}
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <RiCloseCircleFill size="1.5rem" color="#000000" />
          </Button>

          <ul
            className={`${
              openMenu ? "" : "max-lg:-translate-x-full"
            } lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-300 ease-in-out`}
          >
            <li className="mb-6 hidden max-lg:block">
              <Link href="#">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="/"
                onClick={() => setOpenMenu(!openMenu)}
                className={`lg:hover:text-[#007bff] ${
                  pathname === "/" ? "text-[#007bff]" : "text-gray-500"
                } block font-semibold text-[15px]`}
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3 flex gap-2">
              <Link
                href="/categories"
                onClick={() => setOpenMenu(!openMenu)}
                className={`lg:hover:text-[#007bff] ${
                  pathname === "/categories"
                    ? "text-[#007bff]"
                    : "text-gray-500"
                } block font-semibold text-[15px]`}
              >
                Categories
              </Link>
              <Dropdown setOpenMenu={setOpenMenu} data={categories} />
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="/contact"
                onClick={() => setOpenMenu(!openMenu)}
                className={`lg:hover:text-[#007bff] ${
                  pathname === "/contact" ? "text-[#007bff]" : "text-gray-500"
                } block font-semibold text-[15px]`}
              >
                Contact
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="/about"
                onClick={() => setOpenMenu(!openMenu)}
                className={`lg:hover:text-[#007bff] ${
                  pathname === "/about" ? "text-[#007bff]" : "text-gray-500"
                } block font-semibold text-[15px]`}
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <div className="lg:ml-auto max-lg:w-full md:hidden">
                {isLoggedIn && (
                  <Button
                    onClick={() => logout().then(() => setIsLoggedIn(false))}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </li>
          </ul>
        </div>
        <Button
          id="toggleOpen"
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden ml-auto"
        >
          <GiHamburgerMenu size="1.5rem" />
        </Button>
        <div className="lg:ml-auto max-lg:w-full hidden md:block">
          {isLoggedIn && (
            <Button onClick={() => logout().then(() => setIsLoggedIn(false))}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
