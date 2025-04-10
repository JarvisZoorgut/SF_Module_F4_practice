import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../services/api";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Категории</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
