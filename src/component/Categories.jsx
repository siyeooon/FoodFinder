// src/components/MainPage.js

import React, { useState } from "react";
import categoriesData from "../data/categories";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // You can perform additional logic, such as fetching recipes for the selected category
  };

  return (
    <div className="font-['pretendard'] container mx-auto mt-8 text-center">
      <h1 className="text-gray-700 font-bold text-2xl text-center py-2">
        Categories
      </h1>
      <div className="flex mb-8 justify-center">
        <div className="flex">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              className={`bg-gray-300 mt-4 border-none text-base text-white p-3 mr-5 ${
                selectedCategory === category ? "bg-green-600" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {selectedCategory.name} 레시피
          </h2>
          {/* Display recipes for the selected category */}
          {/* You can fetch and render recipes based on the selected category */}
          <p>레시피 목록이 여기에 표시됩니다.</p>
        </div>
      ) : (
        <p>카테고리를 선택하여 레시피를 찾아보세요.</p>
      )}
    </div>
  );
};

export default Categories;
