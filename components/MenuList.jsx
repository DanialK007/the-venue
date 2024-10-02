"use client";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaFileExport, FaTrash } from "react-icons/fa";
import Checkout from "./Checkout";

// const menu = [
//   {
//     category: "Starters",
//     dishes: [
//       {
//         title: "Pork Tenderloin in Green Pepper",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Shrimp with Garlic",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Wild Mushroom with Chicken",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Oysters with Baked Potatoes",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Roast Pork",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//     ],
//   },
//   {
//     category: "Main",
//     dishes: [
//       {
//         title: "Chicken with Lemon",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Pork Tenderloin in Green Pepper",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Shrimp with Garlic",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Wild Mushroom with Chicken",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Oysters with Baked Potatoes",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Roast Pork",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//     ],
//   },
//   {
//     category: "Deserts",
//     dishes: [
//       {
//         title: "Lava Cake",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Orange Tart",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Cheese Cake",
//         price: 20,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Chocolatte Mousse",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//       {
//         title: "Ice Cream",
//         price: 17,
//         contents: ["Pork", "Tenderloin", "Green Pepper"],
//         orderLink: "#",
//       },
//     ],
//   },
// ];

function MenuList() {
  const [checkout, setCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/menu");
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

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
      <div className="flex flex-col gap-1 py-5">
        <div className="flex justify-between gap-2">
          <div className="">{dish.title}</div>
          <div className="">${dish.price}</div>
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

  // function Checkout({ cart, setCheckout }) {
  //   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  //   return (
  //     <div className="fixed z-50 w-[300px] bottom-0 right-0 h-full p-10 bg-white shadow-2xl border-s-2 border-myColor">
  //       <h2 className="text-4xl mb-5">Checkout</h2>
  //       <div className="py-5 space-y-2">
  //         <input
  //           placeholder="Your name*"
  //           type="text"
  //           className="p-2 w-full border-2 border-myColor outline-none rounded"
  //         />
  //         <input
  //           placeholder="Country/Region*"
  //           type="text"
  //           className="p-2 w-full border-2 border-myColor outline-none rounded"
  //         />
  //         <input
  //           placeholder="Street Address*"
  //           type="text"
  //           className="p-2 w-full border-2 border-myColor outline-none rounded"
  //         />
  //       </div>
  //       <div className="space-y-2">
  //         {cart.map((cartItem, index) => (
  //           <div key={index} className="flex justify-between">
  //             <div>{cartItem.title}</div>
  //             <div>$ {cartItem.price}</div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="text-2xl mt-5">Total: ${totalPrice}</div>
  //       <button
  //         onClick={() => alert("Order placed!")}
  //         className="mt-5 w-full bg-green-500 text-white py-2 rounded"
  //       >
  //         Confirm Order
  //       </button>
  //       <button
  //         onClick={() => setCheckout(false)}
  //         className="mt-2 w-full bg-gray-300 py-2 rounded"
  //       >
  //         Go Back
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed z-40 bottom-10 right-5 md:right-10 bg-white text-2xl rounded-full size-12 flex items-center justify-center border-2 text-black/70 shadow-xl border-myColor"
      >
        <div className="relative">
          <div className="absolute text-[0.6rem] font-semibold leading-[1] -top-3 -right-3 bg-white border-2 border-myColor size-4 rounded-full flex items-center justify-center">
            {cart.length}
          </div>
          {/* <FaCartArrowDown /> */}
          <img src="cart.png" alt="" className="w-5 opacity-60"/>
        </div>
      </button>

      {checkout ? (
        <Checkout cart={cart} setCheckout={setCheckout} />
      ) : (
        <div
          className={`bg-white shadow-2xl border-s-2 border-myColor p-10 fixed z-50 w-[300px] bottom-0 right-0 h-full duration-300 ${
            cartOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <button
            onClick={() => {
              toggleCart(false);
            }}
            className="fixed bottom-10 right-5 md:right-10 bg-white border-2 shadow-xl text-xl size-12 flex items-center justify-center rounded-full border-myColor text-black/70"
          >
            {/* <FaFileExport /> */}
            <img src="quit.png" alt="" className="w-6 opacity-80"/>
          </button>
          <div className="text-4xl">The cart list</div>
          {cart.length > 0 ? (
            <>
              <div className="space-y-2 py-5">
                {cart.map((cartItem, index) => (
                  <div key={index} className="flex justify-between gap-5">
                    <div className="flex gap-2">
                      <div className="">{index + 1}.</div>
                      <div className="">{cartItem.title}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="">${cartItem.price}</div>
                      <button
                        onClick={() => removeFromCart(cartItem)}
                        className="text-red-600 text-sm flex pt-1"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-5 flex justify-between gap-5 border-t-2 border-myColor">
                <button
                  onClick={() => setCart([])}
                  className="text-red-600 text-sm hover:underline"
                >
                  Clear all
                </button>
                <div className="flex gap-5 text-2xl">
                  <div>Total:</div>
                  <div>${cart.reduce((acc, item) => acc + item.price, 0)}</div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setCheckout(true);
                  }}
                  className={`bg-myColor hover:bg-myBlack text-white p-2 w-full rounded duration-200`}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="bg-neutral-100 py-10 mt-5 rounded-lg">
              <div className="flex justify-center pb-5">
                <img src="empty.png" alt="" className="h-14" />
              </div>
              <div className="text-center text-xl">Your cart is empty</div>
              <div className="text-center text-gray-600">
                Add some dishes to get started!
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className={`py-8 grid lg:grid-cols-3 gap-8 mx-auto max-w-lg md:max-w-xl lg:max-w-7xl duration-300 ${
          cartOpen ? "sm:pe-64 lg:pe-64" : ""
        }`}
      >
        {loading && (
          <div className="lg:col-span-3 grid grid-cols-3 gap-8 h-[400px] animate-pulse">
            <div className="bg-neutral-400"></div>
            <div className="bg-neutral-400"></div>
            <div className="bg-neutral-400"></div>
          </div>
        )}
        {menu.map((category) => (
          <div
            key={category.category}
            className="border border-myColor/40 p-8 h-fit hover:shadow-2xl duration-300 hover:shadow-black/10"
          >
            <div className="text-3xl border-2 w-fit p-3 text-myColor border-myColor">
              {category.category}
            </div>
            <div className="grid pt-8 divide-y">
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
