import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddCategory from './components/AddCategory';
import AddRecipe from './components/AddRecipe';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/:categoryId" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-recipe" element={<AddRecipe />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
