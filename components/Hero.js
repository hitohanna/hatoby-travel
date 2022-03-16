import React from "react";

function Hero() {
  return (
    <div className="w-full mt-4 md:mt-8 lg:mt-24 lg:min-h-screen ">
      <div className=" mx-auto flex flex-col  items-center px-4 md:px-8 lg:flex-row lg:px-0 lg:max-w-6xl">
        <div className="relative w-full lg:w-1/2 mt-24 text-center lg:text-left ">
          <h1 className="text-4xl tracking-tight font-bold text-textitam lg:font-semibold md:text-6xl ">
            Hotel, mobil & tempat wisata
          </h1>
          <p className="mt-5 text-textp md:text-2xl lg:text-xl md:mt-8">
            siap untuk menemani healing kamu ke tujuan wisata favorit dengan
            pelayanan profesional dan juga berpengalaman
            <span
              className="absolute block bg-blue-500 w-40 h-4w-40 rounded-full mix-blend-multiply
          filter blur-3xl opacity-20 lg:w-96 lg:h-96 left-52 -bottom-48 z-0"
            />
            <span
              className="absolute block bg-red-500 w-40 h-4w-40 rounded-full mix-blend-multiply
          filter blur-3xl opacity-20 lg:w-96 lg:h-96 inset-y-0 left-0 z-0"
            />
          </p>
          <div className="absolute z-40 inset-x-0 lg:left-0 ">
            <button className="w-full mt-5 bg-biru mx-auto rounded-lg px-4 py-3 text-white font-medium hover:bg-blue-900 md:mt-8 md:w-1/2 lg:w-auto  lg:self-start">
              Mulai Booking
            </button>
          </div>
        </div>
        <div className="mt-5 w-full lg:w-1/2 lg:mt-0">
          <img src="/images/heroimg.svg" alt="" className="mt-28" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
