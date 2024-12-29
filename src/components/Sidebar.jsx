import React from 'react';

const Sidebar = ({ selectedCategory, onCategorySelect }) => {
  const categories = ["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone"];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`w-full mb-2 py-2 text-left rounded-lg font-medium ${
            selectedCategory === category ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-600"
          } hover:bg-purple-100 focus:bg-purple-100`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
