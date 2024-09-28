import React from "react";
import { FaStar } from "react-icons/fa";

function Signature() {
  return (
    <div className="py-20 bg-white text-black relative flex flex-col gap-8 p-4">
      <div className="lg:absolute top-0 left-0 w-full h-full lg:py-20 z-10">
        <div className="max-w-7xl mx-auto flex h-full items-center lg:p-8">
          <div className="max-w-[38rem] bg-white shadow-2xl w-full py-20 px-10 lg:px-16 border-2 border-myColor">
            <div className="text-myColor handwriting text-2xl lg:text-3xl">
              Something new
            </div>
            <div className="text-3xl lg:text-5xl pt-2 pb-4">Our Signature Dish</div>
            <div className="flex gap-1 text-[0.6rem] py-2 text-myColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex text-xl py-1 justify-between items-end">
              <div className="">Pork Tenderloin marinated in Green Pepper </div>
              <div className="">$20</div>
            </div>
            <div className="flex gap-1 text-sm pb-8">
              <div className="">Pork</div>
              <div className="">/</div>
              <div className="">Tenderloin</div>
              <div className="">/</div>
              <div className="">Green Pepper</div>
              <div className="">/</div>
              <div className="">Veggies</div>
            </div>
            <a href="#menu" className="border-2 border-myColor text-myColor hover:bg-myColor hover:text-white duration-200 py-3 px-12">Order Now</a>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center max-w-7xl gap-10 lg:p-8">
        <img src="dish.png" alt="" className="h-[400px] lg:h-[520px] object-cover" />
      </div>
    </div>
  );
}

export default Signature;
