"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroHalf({ img, title }) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: 55, // Move the image up slightly on scroll (adjust value as needed)
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom", // Start when the top of the image hits the bottom of the viewport
        end: "bottom top", // End when the bottom of the image hits the top of the viewport
        scrub: true, // Smooth scrolling effect
      },
    });
  }, []);

  return (
    <div className="h-[600px] relative overflow-hidden">
      <img
        ref={imgRef}
        src={img}
        className="w-full h-full fadeIn object-cover -translate-y-44 scale-105"
        alt="Parallax"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center">
        <div className="handwriting text-myColor text-2xl lg:text-5xl pb-2 pt-16 font-semibold">
          The Venue
        </div>
        <div className="text-5xl lg:text-7xl">{title}</div>
      </div>
    </div>
  );
}

export default HeroHalf;
