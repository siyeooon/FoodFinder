// src/pages/Recipes.js
import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

const Recipes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">레시피</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-recipe">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="mb-4 border rounded-md">
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeCard {...recipe} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
