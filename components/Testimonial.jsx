import React from 'react'

function Testimonial() {
  return (
    <div className='relative text-black'>
        <img src="background.webp" alt="" className='w-full min-h-[400px] object-cover'/>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="handwriting text-myColor text-2xl lg:text-4xl">What they say</div>
            <div className="text-3xl lg:text-5xl">Testimonals</div>
            <div className="mt-10 lg:mt-20 max-w-3xl text-center px-5">
                <div className="text-black/60 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad aperiam quisquam, adipisci nemo nam. Sapiente m quisquam, adipisci nemo nam. Sapiente quae, magni non inventore alias provident assumenda possimus beatae quis, quisquam perspiciatis, quas praesentium?</div>
                <div className="text-lg">James Smith, <span className='text-black/50'>Client</span></div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial