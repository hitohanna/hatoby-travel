import Image from "next/image";
import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Why() {
  return (
    <div className="w-full mt-24">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex flex-col w-1/2">
          <div className="flex items-end">
            <LocationMarkerIcon className="w-10 text-biru" />
            <div className="text-2xl font-bold ml-2">Hat.Travel</div>
          </div>
          <h1 className="text-3xl font-semibold text-textitam mt-14">
            Kenapa Pilih Kami
          </h1>
          <p className="text-textp mt-6">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels, private houses,
            apartments... becomes fast, convenient and easy.
          </p>
          <div>
            <button className="mt-10 bg-biru rounded-full px-4 py-2 text-white font-medium hover:bg-blue-900 z-50">
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="w-1/2 relative">
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
