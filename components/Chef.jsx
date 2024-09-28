import React from "react";

function Chef() {
  return (
    <div className="pt-10 pb-20 px-5 bg-white text-black relative">
      <div className="max-w-7xl mx-auto lg:p-8">
        <div className="text-2xl lg:text-4xl handwriting text-myColor">
          Something new
        </div>
        <div className="text-3xl lg:text-5xl">Meet the chefs</div>
        <div className="grid lg:grid-cols-2 gap-5 py-10 text-black/60 leading-[1.8]">
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla.
          </div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-1">
            <img
              src="chef1.png"
              alt=""
              className="w-full min-h-[240px] lg:h-[400px] object-contain object-bottom"
            />
            <div className="text-xl lg:text-2xl pt-8">Maria Smith</div>
            <div className="pb-4 text-black/60">Top Chef</div>
            <button className="uppercase bg-myColor/75 text-white py-2 px-5">
              See more
            </button>
          </div>
          <div className="text-center space-y-1">
            <img
              src="chef2.png"
              alt=""
              className="w-full min-h-[240px] lg:h-[400px] object-contain object-bottom"
            />
            <div className="text-xl lg:text-2xl pt-8">Maria Smith</div>
            <div className="pb-4 text-black/60">Sauce Chef</div>
            <button className="uppercase bg-myColor/75 text-white py-2 px-5">
              See more
            </button>
          </div>
          <div className="text-center space-y-1">
            <img
              src="chef3.png"
              alt=""
              className="w-full min-h-[240px] lg:h-[400px] object-contain object-bottom"
            />
            <div className="text-xl lg:text-2xl pt-8">Maria Smith</div>
            <div className="pb-4 text-black/60">Sushi Chef</div>
            <button className="uppercase bg-myColor/75 text-white py-2 px-5">
              See more
            </button>
          </div>
          <div className="text-center space-y-1">
            <img
              src="chef4.png"
              alt=""
              className="w-full min-h-[240px] lg:h-[400px] object-contain object-bottom"
            />
            <div className="text-xl lg:text-2xl pt-8">Maria Smith</div>
            <div className="pb-4 text-black/60">Sauce Chef</div>
            <button className="uppercase bg-myColor/75 text-white py-2 px-5">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chef;
