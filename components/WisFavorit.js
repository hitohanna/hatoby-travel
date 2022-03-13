import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

const favorits = [
  { id: 1, gbr: "/images/fav1.jpeg", nama: "Malang", ket: "70" },
  { id: 2, gbr: "/images/fav2.jpeg", nama: "Surabaya", ket: "50" },
  { id: 3, gbr: "/images/fav3.jpeg", nama: "Bali", ket: "100" },
  { id: 4, gbr: "/images/fav4.jpeg", nama: "Jogja", ket: "90" },
  { id: 5, gbr: "/images/fav5.jpeg", nama: "Lombok", ket: "30" },
];

function WisFavorit() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-textitam font-medium">
          Kota Wisata Favorit
        </h3>
        <div className="flex items-center space-x-3">
          <div className="border rounded-full p-1 cursor-pointer items-center hover:border-biru">
            <ChevronLeftIcon className="w-6" />
          </div>
          <div className="border rounded-full p-1 cursor-pointer items-center hover:border-biru">
            <ChevronRightIcon className="w-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {favorits.map((fav) => (
          <div
            className="mt-5 rounded-xl shadow-md hover:shadow-2xl"
            key={fav.id}
          >
            <div className="relative rounded-tl-xl rounded-tr-xl overflow-hidden  h-72">
              <Image
                src={fav.gbr}
                alt=""
                layout="fill"
                objectPosition="center"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-medium">{fav.nama}</h3>
              <p className="text-xs text-textabu">{fav.ket} Tujuan Wisata</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WisFavorit;
