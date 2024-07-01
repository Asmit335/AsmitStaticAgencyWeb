import Image from "next/image";
import React from "react";
const icon = [">"];
export default function CompanyWho() {
  return (
    <>
      <div className=" pt-20 pb-12 text-center p-4 md:p-8  ">
        <p className="text-blue-900 text-xl md:text-4xl mt-2 font-bold">
          Company who also worked with us
        </p>
        <p className="text-blue-900 text-sm md:text-lg pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          architecto.
        </p>

        <p className=" mt-[1.4rem] text-[1.5rem] text-blue-800 font-[500] cursor-pointer hover:text-blue-600 block">
          Explore Details {icon}
        </p>

        <Image
          src="/customer.png"
          className=" shadow-cyan-200  "
          width={1700}
          height={750}
          alt="Hero Image"
        />
      </div>
    </>
  );
}
