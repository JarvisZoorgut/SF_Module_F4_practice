import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Рецепты</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Категории</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-category">Добавить категорию</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-recipe">Добавить рецепт</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
