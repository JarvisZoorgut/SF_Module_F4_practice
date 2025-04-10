import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/api"; // предполагаем, что есть такой метод

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Ошибка при получении рецептов:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Все рецепты</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Название рецепта</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>
                {recipe.title}
              </td>
              <td>{recipe.category.name}</td>
              <td>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-info btn-sm">
                  Подробнее
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
