import Link from "next/link";
import React from "react";
import {
  ChevronDownIcon,
  LocationMarkerIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { router, useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const [animasi, setAnimasi] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimasi(true);
      } else setAnimasi(false);
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <div
      className={`w-full h-20 fixed top-0 backdrop-filter backdrop-blur-xl bg-white/90 ${
        animasi && "shadow-lg"
      }  z-50 trasition ease-in-out duration-300`}
    >
      <div className="flex items-center h-full justify-between max-w-6xl mx-auto px-1  md:px-4 lg:px-">
        <div className="flex items-end">
          <LocationMarkerIcon className="w-10 text-biru" />
          <div className="text-2xl font-bold ml-2">Hatoby.Travel</div>
        </div>

        <div className="md:hidden">
          <MenuIcon className="w-7 p-1 rounded-md border cursor-pointer border-biru mr-3" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/">
            <a
              className={`flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer active:bg-biru active:text-white ${
                router.pathname == "/" ? "bg-biru text-white" : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/armada">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              Armada
            </a>
          </Link>
          <Link href="/about">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
