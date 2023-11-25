// src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ title, ingredients, instructions }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">{/* Recipe Image */}</div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Recipe
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{ingredients}</p>
          <p className="mt-2 text-gray-500">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
