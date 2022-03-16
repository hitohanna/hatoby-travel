import { LocationMarkerIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const kotas = ["Surabaya", "Jogja", "Bali", "Lombok"];
const hotels = [
  {
    gbr: "/images/hot1.jpeg",
    kasur: "10",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot2.jpeg",
    kasur: "12",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot3.jpeg",
    kasur: "13",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot8.jpeg",
    kasur: "14",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot4.jpeg",
    kasur: "15",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot5.jpeg",
    kasur: "10",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot6.jpeg",
    kasur: "10",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
  {
    gbr: "/images/hot7.jpeg",
    kasur: "10",
    nama: "Hotel Melati",
    lokasi: "lorem ipsum no.10",
    harga: "500.000",
  },
];

function Penginapan() {
  return (
    <div className="w-full mt-16">
      <div className="mx-2 bg-[#f3f4f6] rounded-2xl px-4 py-12 md:mx-4 lg:py-24 lg:mx-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <h1 className="font-semibold text-2xl md:text-4xl text-textitam">
              Penginapan Rekomendasi
            </h1>
            <div className="flex space-x-1 mt-4 lg:mt-0 md:space-x-4">
              {kotas.map((kota) => (
                <h1
                  className=" text-textp py-2 px-4 rounded-xl hover:text-biru cursor-pointer active:bg-biru active:text-white"
                  key={kota}
                >
                  {kota}
                </h1>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {hotels.map((hotel) => (
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-2xl cursor-pointer"
                key={hotel.gbr}
              >
                <div className="relative rounded-tl-xl rounded-tr-xl overflow-hidden w-full h-72">
                  <Image
                    src={hotel.gbr}
                    alt=""
                    className="object-cover"
                    layout="fill"
                  />
                </div>
                <div className="p-4">
                  <p className="text-textabu text-sm">{hotel.kasur} Kamar</p>
                  <h1 className="text-textitam font-medium text-xl">
                    {hotel.nama}
                  </h1>
                  <div className="flex items-center text-textp text-sm mt-2">
                    <LocationMarkerIcon className="w-4" />
                    <p className="ml-1">{hotel.lokasi}</p>
                  </div>
                  <hr className="my-3" />
                  <h1 className="text-textp">
                    <span className="font-semibold text-textitam">
                      IDR {hotel.harga}
                    </span>
                    /mlm
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Penginapan;
