import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-20 px-8 bg-myBlack text-white relative">
      <div className="max-w-7xl mx-auto grid gap-y-8 lg:grid-cols-4">
        <div className="">
          <div className="text-3xl lg:text-5xl">The Venue</div>
          <div className="uppercase text-lg tracking-[0.7rem]">Restaurant</div>
          <div className="text-white/40 pt-5">
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <FaHeart className="inline mx-1" /> by{" "}
            <a
              href="https://kcube-portfolio.vercel.app/"
              className="border-b border-myColor"
            >
              Danial
            </a>
          </div>
        </div>
        <div className="col-span-2 text-white/80 pe-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo
          eleifend, facilisis nibh ut, interdum odio.
        </div>
        <div className="grid gap-3 h-fit">
          <div className="flex gap-2 items-center">
            <div className="bg-myColor px-2">Address</div>
            <div className="">481 Creekside Lane Avila CA 93424</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-myColor px-2 pe-5">Phone</div>
            <div className="">+959 234 325 2355</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-myColor px-2 pe-6">Email</div>
            <div className="">thevenuerestaurant@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
