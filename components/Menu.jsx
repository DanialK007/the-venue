import React from "react";
import { FaStar } from "react-icons/fa";
import MenuList from "./MenuList";

function Menu() {
  return (
    <div id="menu" className="bg-white text-black relative">
      <div className="max-w-7xl mx-auto lg:p-8">
        <div className="p-5 relative bg-myBlack">
          <div className="border-2 border-myColor pt-8 lg:pt-10 pb-6 text-4xl lg:text-5xl text-white text-center">
            The Menu
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 py-3 px-10 lg:px-28 bg-myBlack text-myColor text-xl lg:text-3xl handwriting">
            5 Stars
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-4 px-5 bg-myBlack text-amber-100 text-xs flex gap-1 handwriting">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="p-5 lg:p-0">
          <MenuList />
        </div>
      </div>
    </div>
  );
}

export default Menu;
