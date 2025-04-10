import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = 'http://localhost:8000/api';

function CategoryPage() {
  const { categoryId } = useParams();  // Извлекаем categoryId из URL
  const [recipes, setRecipes] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);  // Для отслеживания состояния загрузки
  const [error, setError] = useState(null); // Для обработки ошибок

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        setLoading(true); // Устанавливаем загрузку в true перед запросом
        // Одновременный запрос для получения рецептов и информации о категории
        const [recipeResponse, categoryResponse] = await Promise.all([
          axios.get(`${API_URL}/categories/${categoryId}/recipes/`),
          axios.get(`${API_URL}/categories/${categoryId}/`)
        ]);

        setRecipes(recipeResponse.data);
        setCategoryName(categoryResponse.data.name);
        setLoading(false); // Завершаем загрузку
        setError(null); // Сбрасываем ошибку, если запросы успешны
      } catch (error) {
        setLoading(false); // Завершаем загрузку при ошибке
        setError('Ошибка при загрузке данных категории. Попробуйте позже.');
        console.error('Ошибка при загрузке данных категории:', error);
      }
    }

    fetchCategoryData();
  }, [categoryId]);  // Следим за изменением categoryId

  if (loading) {
    return <div>Загрузка...</div>; // Показываем сообщение, если идет загрузка
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>; // Показываем ошибку, если она есть
  }

  return (
    <div>
      <h1>Рецепты категории: {categoryName}</h1>

      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Рецептов в данной категории ещё нет.</p>
      )}

      <div className="mt-3">
        <Link to="/categories" className="btn btn-secondary">Назад к списку категорий</Link>
        <Link to={`/add-recipe`} className="btn btn-primary ml-3">Добавить рецепт</Link>
      </div>
    </div>
  );
}

export default CategoryPage;
