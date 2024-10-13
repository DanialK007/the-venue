"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuForm from "@/components/MenuForm";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const AdminPanel = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Track the selected category ID

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("https://venue-api-three.vercel.app/api/menu");
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  const deleteDish = async (dishId, categoryId) => {
    try {
      console.log("Deleting dish with ID:", dishId, "from category:", categoryId);
      await axios.delete(`https://venue-api-three.vercel.app/api/menu/${categoryId}/dishes/${dishId}`);
      fetchMenu(); // Reload menu after deleting
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };

  const handleDishEditClick = (dish, categoryId) => {
    setCurrentDish(dish);
    setSelectedCategoryId(categoryId); // Ensure categoryId is set when editing
  };

  const addNewDish = (categoryId) => {
    setCurrentDish({ title: "", price: "", contents: [] });
    setSelectedCategoryId(categoryId); // Ensure categoryId is set when adding a new dish
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-black">
      <h1 className="text-6xl font-bold mb-6 text-center">Admin Panel</h1>

      <div className="space-y-4 max-w-4xl mx-auto">
        {menuItems.map((category) => (
          <div key={category._id} className="bg-white p-6 rounded shadow-md">
            <h3 className="text-3xl font-bold">{category.category}</h3>
            <ul className="list-disc pb-1">
              {category.dishes.map((dish) => (
                <li key={dish._id} className="flex justify-between items-center p-2 hover:bg-neutral-100 duration-100">
                  <span>{dish.title} - ${dish.price}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDishEditClick(dish, category._id)} // Pass the correct categoryId
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteDish(dish._id, category._id)} // Use category._id here for delete
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => addNewDish(category._id)} // Pass category._id when adding new dish
              className="mt-2 px-3 py-1 text-sm flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600"
            >
              <FaPlus /> Add New Dish
            </button>
          </div>
        ))}
      </div>

      {currentDish && (
        <MenuForm
          dish={currentDish}
          categoryId={selectedCategoryId} // Pass the selectedCategoryId to MenuForm
          setCurrentDish={setCurrentDish}
          fetchMenuItems={() => {
            const fetchMenu = async () => {
              try {
                const response = await fetch("https://venue-api-three.vercel.app/api/menu");
                const data = await response.json();
                setMenuItems(data);
              } catch (error) {
                console.error("Error fetching menu:", error);
              }
            };
            fetchMenu();
          }}
        />
      )}
    </div>
  );
};

export default AdminPanel;