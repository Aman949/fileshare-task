import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Details from "./Details";

const Header = () => {
  return (
    <div className="bg-[#F2F4F7] relative sm:max-h-[750px]">
      <div className="absolute  sm:left-60">
        <Nav />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1  md:col-span-8 p-32 md:p-12 lg:p-36 flex flex-col justify-center">
          <h1 className="text-yellow-400 text-4xl font-bold sm:text-3xl md:text-4xl">
            User-Centric Excellence:
            <span className="text-3xl md:text-4xl text-black">Our</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold">App Development services</p>
          <p className="text-2xl md:text-3xl font-bold">Tackles Your Pain Points</p>
          <p className="pt-2 text-lg md:text-xl">
            Experience a Seamless Digital Journey with <span className="text-green-800 font-bold">Desun</span> - Where Every
            Line
          </p>
          <p className="text-lg md:text-xl">
            of Code Resolves Your Challenges and <span className="text-yellow-400 font-bold">Elevates Your App
            Experience</span> to
          </p>
          <p className="text-lg md:text-xl">Unparalleled Heights</p>
          <div className="mt-6">
            <Details />
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 flex items-center justify-center">
          <Image
            src="./Group 1.png"
            height={800}
            width={800}
            alt="grp"
            className=" hidden sm:w-full sm:h-auto sm:max-w-full sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
