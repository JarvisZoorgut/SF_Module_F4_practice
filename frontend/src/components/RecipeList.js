import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

function RecipeList() {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(`${API_URL}/categories/${categoryId}/`);
        setRecipes(response.data.recipes);
        setCategoryName(response.data.name);
      } catch (error) {
        console.error('Ошибка при загрузке рецептов:', error);
      }
    }
    fetchRecipes();
  }, [categoryId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Категория: {categoryName}</h2>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="border p-4 rounded shadow">
            <Link to={`/recipes/${recipe.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p className="text-gray-600">{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;