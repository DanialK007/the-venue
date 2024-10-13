"use client"
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchBox from './SearchBox';
import Menu from './Menu';

// Create a client
const queryClient = new QueryClient();

const Testing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 text-black">
        <SearchBox onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
          <Menu searchTerm={searchTerm} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Testing;