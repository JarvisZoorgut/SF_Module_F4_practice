import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${recipeId}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Ошибка при получении рецепта:', error));
  }, [recipeId]);

  if (!recipe) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Категория:</strong> {recipe.category_name}</p>
      <p><strong>Описание:</strong> {recipe.description}</p>
    </div>
  );
}

export default RecipeDetail;
