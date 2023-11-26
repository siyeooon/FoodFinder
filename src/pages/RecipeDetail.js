import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();

  // id에 해당하는 레시피 정보 가져오기
  const recipe = /* 레시피 데이터 배열에서 id에 해당하는 레시피 가져오기 */;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;