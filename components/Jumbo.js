import Image from "next/image";
import React from "react";

function Jumbo() {
  return (
    <div className="max-w-6xl mx-auto mt-8 flex-col-reverse items-center p-4 text-center lg:mt-16 lg:p-0 lg:flex lg:flex-row lg:text-left">
      <div className="flex relative mr-10 w-3/4 mx-auto lg:w-auto lg:mx-0">
        <Image
          className="w-full object-contain items-center"
          src="/images/jumbo.png"
          alt=""
          width="1000"
          height="1000"
        />
      </div>
      <div className="flex flex-col lg:ml-12">
        <h3 className="text-textabu md:text-2xl">KEUNTUNGAN</h3>
        <h1 className="font-semibold text-4xl mt-3 md:text-5xl">
          Happening cities
        </h1>

        <div className="flex flex-col mt-8 justify-evenly ">
          <div className="">
            <button className="text-xs p-2 bg-blue-100 text-blue-800 rounded-lg font-medium cursor-default">
              Advertising
            </button>
            <h1 className="font-medium text-textitam text-2xl mt-2">
              Cost-effective advertising
            </h1>
            <p className="text-textp mt-2 text-sm">
              With a free listing, you can advertise your rental with no upfront
              costs
            </p>
          </div>
          <div className="mt-10">
            <button className="text-xs p-2 bg-green-100 text-green-800 rounded-lg font-medium cursor-default">
              Exposure
            </button>
            <h1 className="font-medium text-textitam text-2xl mt-2">
              Reach millions with Chisfis
            </h1>
            <p className="text-textp mt-2 text-sm">
              Millions of people are searching for unique places to stay around
              the world
            </p>
          </div>
          <div className="mt-10">
            <button className="text-xs p-2 bg-red-100 text-red-800 rounded-lg font-medium cursor-default">
              Secure
            </button>
            <h1 className="font-medium text-textitam text-2xl mt-2">
              Secure and simple
            </h1>
            <p className="text-textp mt-2 text-sm">
              A Holiday Lettings listing gives you a secure and easy way to take
              bookings and payments online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
