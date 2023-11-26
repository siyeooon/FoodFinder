import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  // id에 해당하는 레시피 정보 가져오기
  const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 ">{recipe.title}</h2>
      <img
        src={recipe.image}
        alt="Post"
        className="pt-5 w-full h-full object-cover rounded-md mb-4"
      />
    </div>
  );
};

export default RecipeDetail;
