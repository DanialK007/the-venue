import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

function page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="h-screen bg-my Black/10 p-4 ps-56">
        <div className="fixed left-0 top-0 h-full bg-myBlack text-white p-5">
          <div className="p-5">
            <div className="text-2xl lg:text-3xl">The Venue</div>
            <div className="uppercase text-[0.48rem] text-xs tracking-[0.41rem]">
              Restaurant
            </div>
          </div>
          <div className="space-y-1">
            <a
              href="#"
              className="p-3 duration-200 bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <RiDashboardFill />
              Dashboard
            </a>
            <a
              href="#"
              className="p-3 duration-200 hover:bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <BiSolidFoodMenu />
              Menu
            </a>
            <a
              href="#"
              className="p-3 duration-200 hover:bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <MdFoodBank />
              Order
            </a>
            <a
              href="#"
              className="p-3 duration-200 hover:bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <BsFillPeopleFill />
              Customers
            </a>
            <a
              href="#"
              className="p-3 duration-200 hover:bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <MdAnalytics />
              Analysitics
            </a>
            <a
              href="#"
              className="p-3 duration-200 hover:bg-myColor/20 font-semibold text-[#eabfa9] flex items-center gap-2 rounded-md"
            >
              <IoSettingsSharp />
              Setting
            </a>
          </div>
        </div>

        <div className="h-full">
          <div className="grid gap-5 grid-cols-4">
            <div className="rounded-lg overflow-hidden relative bg-white border shadow-md">
              <img src="stat.png" className="w-full pt-2" />

              <div className="absolute top-0 left-0 w-full p-5 flex gap-3">
                <div className="size-14 bg-myColor/20 text-myColor text-3xl rounded-full flex items-center justify-center">
                  <MdFoodBank />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="leading-[1] font-semibold">Orders</div>
                  <div className="text-2xl leading-[1] font-semibold">1,245</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative bg-white border shadow-md">
              <img src="stat.png" className="w-full pt-2" />

              <div className="absolute top-0 left-0 w-full p-5 flex gap-3">
                <div className="size-14 bg-myColor/20 text-myColor text-3xl rounded-full flex items-center justify-center">
                  <BsFillPeopleFill />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="leading-[1] font-semibold">Customers</div>
                  <div className="text-2xl leading-[1] font-semibold">368</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative bg-white border shadow-md">
              <img src="stat.png" className="w-full pt-2" />

              <div className="absolute top-0 left-0 w-full p-5 flex gap-3">
                <div className="size-14 bg-myColor/20 text-myColor text-3xl rounded-full flex items-center justify-center">
                  <BiSolidFoodMenu />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="leading-[1] font-semibold">Menu</div>
                  <div className="text-2xl leading-[1] font-semibold">1,245</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden relative bg-white border shadow-md">
              <img src="stat.png" className="w-full pt-2" />

              <div className="absolute top-0 left-0 w-full p-5 flex gap-3">
                <div className="size-14 bg-myColor/20 text-myColor text-3xl rounded-full flex items-center justify-center">
                  <MdAnalytics />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="leading-[1] font-semibold">Income</div>
                  <div className="text-2xl leading-[1] font-semibold">1,245</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
