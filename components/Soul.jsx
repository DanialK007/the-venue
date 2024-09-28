import React from 'react'
import { FaPlay } from "react-icons/fa";

function Soul() {
  return (
    <div className='relative h-[500px]'>
        <img src="beef.png" alt="" className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center">
            <div className="text-4xl lg:text-5xl text-white">Food for the soul</div>
            <div className="flex items-center justify-center text-xl border-2 hover:bg-white hover:text-black duration-200 size-[3.8rem] ps-1 rounded-full">
                <FaPlay className=''/>
            </div>
        </div>
    </div>
  )
}

export default Soul