import React from "react";
import { FaStar } from "react-icons/fa";

const dishes = [
  {
    title: "Pork Tenderloin marinated in Green Pepper",
    img: "dish1.png",
    price: "$20",
    contents: ["Pork", "Tenderloin", "Green Pepper", "Veggies"],
    orderLink: "#",
  },
  {
    title: "Beef Tartar with forest mushroms",
    img: "dish2.png",
    price: "$23",
    contents: ["Pork", "Tenderloin", "Green Pepper", "Veggies"],
    orderLink: "#",
  },
  {
    title: "Beef Steak with sauted vegetables",
    img: "dish3.png",
    price: "$20",
    contents: ["Pork", "Tenderloin", "Green Pepper", "Veggies"],
    orderLink: "#",
  },
];

function MenuItem({ dish }) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 py-8">
      <div className="flex flex-col gap-1 justify-center pe-10">
        <div className="flex gap-1 text-xs text-myColor">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex justify-between text-xl lg:text-2xl pt-2">
          <div className="">{dish.title}</div>
          <div className="">{dish.price}</div>
        </div>
        <div className="text-gray-600 text-lg divide-x-[2px] divide-gray-400 space-x-2 -ms-1">
          {dish.contents.map((content) => (
            <span className="ps-1" key={content}>
              {content}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-myColor text-lg lg:text-xl mt-10 py-2 px-10 border-2 border-myColor hover:bg-myColor hover:text-white w-fit"
        >
          Order Now
        </a>
      </div>
      <div className="">
        <img src={dish.img} alt="" className="w-full" />
      </div>
    </div>
  );
}

function Dishes() {
  return (
    <div className="bg-slate-50 text-black border-t-[3px] border-myColor/80">
      <div className="max-w-7xl mx-auto py-20 px-8">
        <div className="handwriting text-2xl lg:text-3xl text-myColor">
          Something new
        </div>
        <div className="text-3xl lg:text-5xl pt-2 pb-10">
          Our Signature Dishes
        </div>
        <div className="space-y-8 divide-y-2 lg:divide-y-0">
          {dishes.map((dish) => (
            <MenuItem dish={dish} key={dish.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
