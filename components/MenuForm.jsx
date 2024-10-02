"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const MenuForm = ({ dish, categoryId, setCurrentDish, fetchMenuItems }) => {
  const [title, setTitle] = useState(dish.title || '');
  const [price, setPrice] = useState(dish.price || '');
  const [contents, setContents] = useState(dish.contents || []);

  useEffect(() => {
    if (dish) {
      setTitle(dish.title);
      setPrice(dish.price);
      setContents(dish.contents);
    }
  }, [dish]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDish = { title, price, contents };
  
    try {
      if (dish._id) {
        // Update existing dish
        console.log("Updating dish with ID:", dish._id, "in category:", categoryId);
        await axios.put(`http://localhost:8000/api/menu/${categoryId}/dishes/${dish._id}`, newDish);
      } else {
        // Add new dish
        console.log("Adding new dish to category:", categoryId);
        await axios.post(`http://localhost:8000/api/menu/${categoryId}/dishes`, newDish); // Ensure categoryId is used here
      }
      setCurrentDish(null); // Close form after saving
      fetchMenuItems(); // Refresh menu items
    } catch (error) {
      console.error("Error saving dish:", error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20'>
      <div className="p-8 bg-white rounded shadow-md max-w-lg w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4">{dish._id ? 'Edit' : 'Add'} Dish</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Dish Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Contents</label>
            {contents.map((content, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={content}
                  onChange={(e) => {
                    const newContents = [...contents];
                    newContents[index] = e.target.value;
                    setContents(newContents);
                  }}
                  className="w-full p-2 border rounded"
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    const newContents = contents.filter((_, i) => i !== index);
                    setContents(newContents);
                  }}
                  className="ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setContents([...contents, ''])}
              className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Add Content
            </button>
          </div>
          <div className='space-x-2'>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setCurrentDish(null)}
              className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;