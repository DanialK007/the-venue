"use client";
import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import menuAnimation from '../public/menu/menu.json'; // Adjust this path to your folder structure

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScroll] = useState(false);
  const lottieRef = useRef(null); // Reference for Lottie animation

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);

    // Toggle animation between hamburger and cross with increased speed
    if (showMenu) {
      lottieRef.current.setSpeed(2); // Increase speed to 3x (you can adjust this)
      lottieRef.current.playSegments([30, 0], true);
    } else {
      lottieRef.current.setSpeed(2); // Increase speed to 3x
      lottieRef.current.playSegments([0, 30], true);
    }
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
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full px-5 lg:px-20 flex justify-between items-center duration-500 z-50 ${
        isScrolled ? "bg-black/85 py-5" : "bg-transparent py-12"
      }`}
    >
      <div className="pe-20">
        <div className="text-2xl lg:text-3xl">The Venue</div>
        <div className="uppercase text-[0.48rem] text-xs tracking-[0.41rem]">
          Restaurant
        </div>
      </div>

      {/* For larger screens */}
      <div className="hidden lg:flex items-center gap-8 uppercase font-semibold">
        <a href="/" className="relative group">
          Home
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
        <a href="/about" className="relative group">
          About Us
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
        <a href="/menu" className="relative group">
          Menu
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
        <a href="#" className="relative group">
          Delivery
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
        <a href="/blog" className="relative group">
          Blog
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
        <a href="/contact" className="relative group">
          Contact
          <div className="absolute -bottom-1 left-0 h-[0.1rem] w-0 group-hover:w-full duration-300 bg-white"></div>
        </a>
      </div>

      <button className="hidden lg:block border border-white p-3 hover:border-myColor hover:bg-myColor">
        Reservation: +959 233 623 6432
      </button>

      {/* For smaller screens with animated menu */}
      <button
        className="p-2 lg:hidden text-2xl relative z-50 invert"
        onClick={handleToggleMenu}
      >
        {/* Lottie animation for the menu */}
        <Lottie
          lottieRef={lottieRef} // Reference to control the animation
          animationData={menuAnimation}
          loop={false}
          autoplay={false} // Ensure it doesn't auto-play
          initialSegment={[0, 30]} // Start with hamburger menu
          style={{ width: 32, height: 32 }}
        />
      </button>

      <div
        className={`fixed lg:hidden top-0 left-0 w-full h-full backdrop-blur-sm bg-myBlack/90 flex gap-5 flex-col items-center justify-center duration-700 ease-out ${
          showMenu
            ? "opacity-100 z-40 pointer-events-auto"
            : "opacity-0 -z-10 pointer-events-none"
        }`}
      >
        <a href="/" className="hover:text-myColor text-2xl">
          Home
        </a>
        <a href="/about" className="hover:text-myColor text-2xl">
          About Us
        </a>
        <a href="/menu" className="hover:text-myColor text-2xl">
          Menu
        </a>
        <a href="#" className="hover:text-myColor text-2xl">
          Delivery
        </a>
        <a href="/blog" className="hover:text-myColor text-2xl">
          Blog
        </a>
        <a href="/contact" className="hover:text-myColor text-2xl">
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