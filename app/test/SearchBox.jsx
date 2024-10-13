"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="fixed top-4 right-4 z-10">
      <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
          className="py-2 px-4 rounded-l-full focus:outline-none"
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-r-full hover:bg-primary/90 transition-colors">
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;