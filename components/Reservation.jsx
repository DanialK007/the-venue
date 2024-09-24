import React from "react";

function Reservation() {
  return (
    <div className="relative h-[500px]">
      <img
        src="reservation.png"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full px-8 flex flex-col justify-center">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="text-xl lg:text-3xl text-myColor handwriting">
            5 Stars
          </div>
          <div className="text-3xl lg:text-5xl pb-5">Make a Reservation</div>
          <div className="grid lg:grid-cols-3 gap-5 py-10">
            <input
              type="date"
              className="border-2 border-myColor bg-transparent outline-none py-3 px-5 w-full"
            />
            <input
              type="time"
              className="border-2 border-myColor bg-transparent outline-none py-3 px-5 w-full"
            />
            <select name="person" className="bg-transparent border-2 border-myColor outline-none py-3 px-5">
                <option value="1" disabled>2 person</option>
                <option value="2">3 person</option>
                <option value="2">4 person</option>
                <option value="2">5 person</option>
                <option value="2">6 person</option>
            </select>
          </div>
          <button className="border-2 border-myColor py-3 px-14 text-xl bg-myColor text-white">Make a reservation</button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
