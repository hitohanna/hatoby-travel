import Link from "next/link";
import React from "react";
import { ChevronDownIcon, LocationMarkerIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <div className="w-full h-20 fixed top-0 bg-white z-50">
      <div className="flex items-center h-full justify-between max-w-6xl mx-auto">
        <div className="flex items-end">
          <LocationMarkerIcon className="w-10 text-biru" />
          <div className="text-2xl font-bold ml-2">Hat.Travel</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              Armada
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center hover:bg-biru hover:text-white py-2 px-4 rounded-xl text-textitam cursor-pointer">
              About Us
            </a>
          </Link>
          <Link href="/">
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
