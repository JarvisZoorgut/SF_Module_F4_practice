import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${recipeId}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Ошибка при получении рецепта:', error));
  }, [recipeId]);

  if (!recipe) return <p className="text-center mt-5">Загрузка...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">{recipe.title}</h2>
          <p><strong>Категория:</strong> {recipe.category.name}</p>
          <hr />
          <p><strong>Описание:</strong> {recipe.description}</p>
          <hr />
          <p><strong>Ингредиенты:</strong> {recipe.ingredients}</p>
          <hr />
          <p><strong>Инструкции:</strong> {recipe.instructions}</p>
          <Link to="/" className="btn btn-secondary mt-4">← Назад</Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;