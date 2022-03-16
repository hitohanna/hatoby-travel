import Image from "next/image";
import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Why() {
  return (
    <div className="w-full mt-12">
      <div className="max-w-6xl mx-auto flex flex-col text-center px-4 md:px-6 lg:px-0 lg:text-left lg:flex-row items-center">
        <div className="flex flex-col lg:w-1/2">
          <div className="flex items-center self-center lg:self-start">
            <LocationMarkerIcon className="w-10 text-biru" />
            <div className="text-2xl font-bold ml-2">Hatoby.Travel</div>
          </div>
          <h1 className="text-3xl font-semibold text-textitam mt-6 lg:mt-14">
            Kenapa Pilih Kami
          </h1>
          <p className="text-textp mt-4 lg:mt-6">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels, private houses,
            apartments... becomes fast, convenient and easy.
          </p>
          <div>
            <button className="mt-6 lg:mt-10 bg-biru rounded-full px-4 py-2 text-white font-medium hover:bg-blue-900 z-50">
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="w-full mt-6 lg:mt-0 lg:w-1/2 relative">
          <Image
            className="object-contain"
            alt=""
            src="/images/jumbo1.png"
            width="600"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}

export default Why;
