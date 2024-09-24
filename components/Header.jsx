"use client";
import React, { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScroll] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full px-5 lg:px-20 flex justify-between items-center duration-500 z-50 ${
        isScrolled ? "bg-black/85 py-5" : "bg-transparent py-12"
      }`}
    >
      <div className="pe-20">
        <div className="text-2xl lg:text-3xl">The Venue</div>
        <div className="uppercase text-[0.48rem] text-xs tracking-[0.41rem]">
          Restaurent
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8 uppercase font-semibold">
        <a href="#" className="hover:text-myColor">
          Home
        </a>
        <a href="#" className="hover:text-myColor">
          About Us
        </a>
        <a href="#" className="hover:text-myColor">
          Menu
        </a>
        <a href="#" className="hover:text-myColor">
          Delivary
        </a>
        <a href="#" className="hover:text-myColor">
          Blog
        </a>
        <a href="#" className="hover:text-myColor">
          Contact
        </a>
      </div>
      <button className="hidden lg:block border border-white p-3 hover:border-myColor hover:bg-myColor">
        Reservation: +959 233 623 6432
      </button>
      <button
        className="p-2 lg:hidden text-2xl relative z-50"
        onClick={handleToggleMenu}
      >
        <CgMenuRightAlt />
      </button>

      <div
        className={`fixed lg:hidden top-0 left-0 w-full h-full backdrop-blur-sm bg-myBlack/90 flex gap-5 flex-col items-center justify-center duration-700 ease-out ${
          showMenu
            ? "opacity-100 z-40 pointer-events-auto"
            : "opacity-0 -z-10 pointer-events-none"
        }`}
      >
        <a href="#" className="hover:text-myColor text-2xl">
          Home
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          About Us
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          Menu
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          Delivary
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          Blog
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          Contact
        </a>

        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center p-10">
          <button className="border border-white p-3 hover:border-myColor hover:bg-myColor">
            Reservation: +959 233 623 6432
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
