"use client"
import React, { useEffect, useState } from "react";
import {
  FaCartArrowDown,
  FaFileExport,
  FaTrash,
} from "react-icons/fa";

const menu = [
  {
    category: "Starters",
    dishes: [
      {
        title: "Pork Tenderloin in Green Pepper",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Shrimp with Garlic",
        price: 17,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Wild Mushroom with Chicken",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Oysters with Baked Potatoes",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Roast Pork",
        price: 17,
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
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Pork Tenderloin in Green Pepper",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Shrimp with Garlic",
        price: 17,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Wild Mushroom with Chicken",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Oysters with Baked Potatoes",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Roast Pork",
        price: 17,
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
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Orange Tart",
        price: 17,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Cheese Cake",
        price: 20,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Chocolatte Mousse",
        price: 17,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
      {
        title: "Ice Cream",
        price: 17,
        contents: ["Pork", "Tenderloin", "Green Pepper"],
        orderLink: "#",
      },
    ],
  },
];

function MenuList() {
  // const [menu, setMenu] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/api/menu");
  //       if (!response.ok) {
  //         throw new Error ("Network response failed");
  //       }
  //       const data = await response.json();
  //       setMenu(data);
  //     } catch (error) {
  //       console.error("Error fetching menu:", error);
  //     }
  //   };

  //   fetchMenu();
  // }, []);

  const toggleCart = (x) => {
    setCartOpen(x !== undefined ? x : !cartOpen);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  function MenuItem({ dish }) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="">{dish.title}</div>
          <div className="">$ {dish.price}</div>
        </div>
        <div className="text-sm text-gray-600 divide-x-[2px] divide-gray-400 space-x-2 -ms-1">
          {dish.contents.map((content) => (
            <span className="ps-1" key={content}>
              {content}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            addToCart(dish), toggleCart(true);
          }}
          className="text-myColor pt-2 hover:underline w-fit"
        >
          Order Now
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed z-40 bottom-10 right-10 bg-white text-2xl rounded-full size-12 flex items-center justify-center border-2 text-black/70 shadow-xl border-myColor"
      >
        <div className="relative">
          <div className="absolute text-[0.6rem] font-semibold leading-[1] -top-3 -right-3 bg-white border-2 border-myColor size-4 rounded-full flex items-center justify-center">
            {cart.length}
          </div>
          <FaCartArrowDown />
        </div>
      </button>
      <div
        className={`bg-white shadow-2xl border-s-2 border-myColor p-10 fixed z-50 min-w-[360px] bottom-0 right-0 h-full duration-300 ${
          cartOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={() => {
            toggleCart(false);
          }}
          className="fixed bottom-10 right-10 bg-white border-2 shadow-xl text-xl size-12 flex items-center justify-center rounded-full border-myColor text-black/70"
        >
          <FaFileExport />
        </button>
        <div className="text-4xl">The cart list</div>
        <div className="space-y-2 py-5">
          {cart.map((cartItem, index) => (
              <div key={index} className="flex justify-between gap-5">
                <div className="flex gap-2">
                  <div className="">{index + 1}.</div>
                  <div className="">{cartItem.title}</div>
                </div>
                <div className="flex gap-2">
                  <div className="">$ {cartItem.price}</div>
                  <button
                    onClick={() => removeFromCart(cartItem)}
                    className="text-red-600 text-sm"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="pt-5 flex justify-between gap-5 border-t-2 border-myColor">
          <button
            onClick={() => setCart([])}
            className="text-red-600 text-sm hover:underline"
          >
            Clear all
          </button>
          <div className="flex gap-5 text-2xl">
            <div className="">Total :</div>
            <div>${cart.reduce((acc, item) => acc + item.price, 0)}</div>
          </div>
        </div>
      </div>
      <div className="py-8 grid lg:grid-cols-3 gap-8 mx-auto max-w-lg md:max-w-xl lg:max-w-7xl">
        {menu.map((category) => (
          <div
            key={category.category}
            className="border border-myColor/40 p-8 h-fit hover:shadow-2xl duration-300 hover:shadow-black/10"
          >
            <div className="text-3xl border-2 w-fit p-3 text-myColor border-myColor">
              {category.category}
            </div>
            <div className="grid gap-8 py-8">
              {category.dishes.map((dish) => (
                <MenuItem key={dish.title} dish={dish} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuList;
