import React from "react";
import { FaStar } from "react-icons/fa";

const menu = [
  {
    category: "Starters",
    dishes: [
      {
        title: "Pork Tenderloin in Green Pepper",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Shrimp with Garlic",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Wild Mushroom with Chicken",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Oysters with Baked Potatoes",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Roast Pork",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
    ],
  },
  {
    category: "Main",
    dishes: [
      {
        title: "Chicken with Lemon",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Pork Tenderloin in Green Pepper",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Shrimp with Garlic",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Wild Mushroom with Chicken",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Oysters with Baked Potatoes",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Roast Pork",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
    ],
  },
  {
    category: "Deserts",
    dishes: [
      {
        title: "Lava Cake",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Orange Tart",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Cheese Cake",
        price: "$20",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Chocolatte Mousse",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Ice Cream",
        price: "$17",
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
    ],
  },
];

function MenuItem({ dish }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <div className="">{dish.title}</div>
        <div className="">{dish.price}</div>
      </div>
      <div className="text-sm text-gray-600">
        {dish.contents.map((content) => (
          <span key={content}>{content}</span>
        ))}
      </div>
      <a href="#" className="text-myColor pt-2 hover:underline w-fit">Order Now</a>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-white text-black relative">
      <div className="max-w-7xl mx-auto lg:p-8">
        <div className="p-5 relative bg-myBlack">
          <div className="border-2 border-myColor pt-8 lg:pt-10 pb-6 text-4xl lg:text-5xl text-white text-center">
            The Menu
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 py-3 px-10 lg:px-28 bg-myBlack text-myColor text-xl lg:text-3xl handwriting">
            5 Stars
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-4 px-5 bg-myBlack text-amber-100 text-xs flex gap-1 handwriting">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="py-20 px-8 grid lg:grid-cols-3 gap-8">
          {menu.map((category) => (
            <div key={category.category} className="border p-8 h-fit">
              <div className="text-3xl border-2 w-fit p-3 text-myColor border-myColor">{category.category}</div>
              <div className="grid gap-8 py-8">
                {category.dishes.map((dish) => (
                  <MenuItem key={dish.title} dish={dish} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
