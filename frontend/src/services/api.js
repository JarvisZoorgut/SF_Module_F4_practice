import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL: API_URL,
});

export const getCategories = () => api.get("categories/");
export const getRecipes = () => api.get("recipes/");
export const getCategoryRecipes = (categoryId) =>
  api.get(`categories/${categoryId}/recipes/`);
export const getRecipe = (recipeId) => api.get(`recipes/${recipeId}/`);
