// src/components/Ingredient.js

import React, { useState } from "react";

const Ingredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");

  const handleAddIngredient = () => {
    if (inputIngredient.trim() !== "") {
      setIngredients([...ingredients, inputIngredient.trim()]);
      setInputIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleRecommendRecipes = () => {
    // Perform logic to recommend recipes based on the entered ingredients
    // For simplicity, let's just log the selected ingredients for now
    console.log("Recommend recipes for ingredients:", ingredients);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddIngredient();
    }
  };

  return (
    <div className="font-['pretendard'] container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">내 재료</h1>

      <div className="mb-4 flex">
        <input
          type="text"
          className="border p-2 flex-1 mr-2 rounded-md"
          placeholder="재료 입력"
          value={inputIngredient}
          onChange={(e) => setInputIngredient(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button
          className="bg-green-500 text-white p-2 rounded border-none"
          onClick={handleAddIngredient}
        >
          추가
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 mt-7">입력된 재료</h2>
        <ul className="flex flex-wrap">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center mb-2 mr-2">
              <div className="bg-gray-200 rounded-full p-4">
                <span className="mr-2 font-semibold">{ingredient}</span>
                <span
                  className="text-red-600 p-1 cursor-pointer"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  삭제
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-7">
        <button
          className={`bg-green-500 text-white p-3 border-none rounded ${
            ingredients.length === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleRecommendRecipes}
          disabled={ingredients.length === 0}
        >
          {ingredients.length === 0
            ? "재료를 추가해주세요"
            : "이 재료들로 요리할래요"}
        </button>
      </div>
    </div>
  );
};

export default Ingredient;
