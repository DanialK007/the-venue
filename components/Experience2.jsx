import React from "react";

function Experience2() {
  return (
    <div className="lg:pt-20 py-10 px-5 bg-white text-black relative">
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto gap-8 lg:p-8">
        <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 py-10 lg:py-20 ps-10 lg:ps-16 pe-8 lg:pe-5 bg-white shadow-2xl border-2 lg:border-e-0 border-[#b49383] max-w-[640px]">
          <div className="handwriting text-2xl lg:text-4xl text-[#b49383]">
            Something new
          </div>
          <div className="text-2xl lg:text-5xl">
            An Extraordinery Experience
          </div>
          <div className="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla massa.
          </div>
        </div>
        <div className="lg:col-span-2">
          <img src="grid3.png" alt="" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Experience2;
