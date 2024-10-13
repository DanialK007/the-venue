"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchMenu = async () => {
  const response = await fetch("https://venue-api-three.vercel.app/api/menu");
  if (!response.ok) {
    throw new Error("Network response failed");
  }
  return response.json();
};

const Menu = ({ searchTerm }) => {
  const { data: menu, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching menu: {error.message}</p>;

  const filteredMenu = menu.map(category => ({
    ...category,
    dishes: category.dishes.filter(dish =>
      dish.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.contents.some(content => content.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.dishes.length > 0);

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
          className="text-primary pt-2 hover:underline w-fit"
        >
          Order Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      {filteredMenu.map((category) => (
        <div
          key={category.category}
          className="border border-primary/40 p-8 h-fit hover:shadow-2xl duration-300 hover:shadow-black/10"
        >
          <div className="text-3xl border-2 w-fit p-3 text-primary border-primary">
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
  );
};

export default Menu;