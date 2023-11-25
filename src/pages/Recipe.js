// src/pages/Recipes.js
import React from "react";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const recipes = [
    {
      title: "Pasta Carbonara",
      ingredients: "Spaghetti, eggs, pancetta, black pepper, Parmesan cheese",
      instructions:
        "Cook spaghetti. In a bowl, mix eggs, pancetta, pepper, and Parmesan. Mix with cooked spaghetti.",
    },
    // Add more recipes as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Recipe</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
