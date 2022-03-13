import React from "react";

function Hero() {
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="relative w-1/2 mt-28 ">
          <h1 className="text-7xl text-textitam font-semibold">
            Hotel, mobil & tempat wisata
          </h1>
          <p className="mt-5 text-textp text-lg">
            siap untuk menemani healing kamu ke tujuan wisata favorit dengan
            pelayanan profesional dan juga berpengalaman
            <span
              className="absolute block bg-blue-500 w-72 h-72 rounded-full mix-blend-multiply
          filter blur-3xl opacity-20 lg:w-96 lg:h-96 left-52 -bottom-48 z-30"
            />
            <span
              className="absolute block bg-red-500 w-72 h-72 rounded-full mix-blend-multiply
          filter blur-3xl opacity-20 lg:w-96 lg:h-96 inset-y-0 left-0 z-40"
            />
          </p>
          <div>
            <button className="absolute mt-5 bg-biru rounded-full px-4 py-2 text-white font-medium hover:bg-blue-900 z-50">
              Mulai Booking
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/images/heroimg.svg" alt="" className="mt-28" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
