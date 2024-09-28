import React from 'react'
import MenuList from './MenuList'

function Discover() {
  return (
    <div className="bg-white text-black pt-20">
        <div className="max-w-7xl mx-auto p-5 lg:p-8">
          <div className="text-center handwriting text-2xl lg:text-3xl text-myColor">
            Something new
          </div>
          <div className="text-center text-3xl lg:text-5xl py-2">
            Discover Our Menu
          </div>
          <div className="grid lg:grid-cols-2 gap-5 py-8 text-black/60 leading-[1.8]">
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla.
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 pt-10">
            <div className="">
              <img src="menu1.png" alt="" />
            </div>
            <div className="">
              <img src="menu2.png" alt="" />
            </div>
            <div className="">
              <img src="menu3.png" alt="" />
            </div>
          </div>

          <MenuList />
        </div>
      </div>
  )
}

export default Discover