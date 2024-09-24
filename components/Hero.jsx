import React from "react";

function Hero() {
  return (
    <div className="h-[700px] lg:h-[900px] relative">
      <div className="absolute top-0 left-0 w-full h-full z-10 text-center bg-black/10 text-white flex items-center justify-center flex-col">
        <div className="text-xl md:text-3xl lg:text-5xl font-semibold handwriting text-myColor pt-10 lg:pt-0">
          The Venue is
        </div>
        <div className="text-3xl md:text-4xl lg:text-6xl py-2 lg:py-6">
          An Extraordinery Experience
        </div>
        <div className="max-w-4xl p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien. Suspendisse cursus faucibus finibus.
        </div>
      </div>
      <img src="hero.png" alt="" className="w-full h-full object-cover" />
      <a href="#scroll" id="scroll" className="absolute outline-none z-20 bottom-5 left-1/2 -translate-x-1/2 invert">
        <img
          src="scroll.gif"
          alt=""
          className="h-10"
        />
      </a>
    </div>
  );
}

export default Hero;
