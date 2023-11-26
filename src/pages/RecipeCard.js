// src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ title, ingredients, instructions, image }) => {
  return (
    <div className="container mx-auto max-w-md bg-white overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="justify-start">
          <img
            src={image}
            alt="음식 이미지"
            className="w-full g-60 md:h-64 object-cover "
          />
        </div>
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
