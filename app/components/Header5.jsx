import Image from "next/image";
import React from "react";

const Header5 = () => {
  return (
    <div className="bg-[#F2F4F7] flex justify-evenly p-14">
      <div className="flex flex-col justify-around">
        <h1 className="font-bold text-3xl">Our team</h1>
        <p className="font-semibold pt-4">
          Thousand is a full-cycle digital production company with its own
          product analytics,<br /> design, web and mobile development.
        </p>
        <div className="flex gap-10 pt-5">
          <p className="font-bold text-4xl">28 <br /><span className="font-normal text-sm">team members</span></p>
          <p className="font-bold text-4xl">+100 <br/><span className="font-normal text-sm">projects</span></p>
          <p className="font-bold text-4xl">7 years <br /><span className="font-normal text-sm">in IT sphere</span></p>
        </div>
        <p className="pt-5">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire <br />the best specialists in the market. It&apos;s expensive
          but worth it.
        </p>
      </div>
      <div>
        <Image src="/grp.png" height={400} width={400} alt="grp" />
      </div>
    </div>
  );
};

export default Header5;
