import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Добро пожаловать в приложение с рецептами!</h1>
      <p className="lead mt-3">
        Это ваше новое место для поиска и создания рецептов.
      </p>
      <div className="mt-4">
        <Link to="/categories" className="btn btn-primary btn-lg me-4">
          Посмотреть категории блюд
        </Link>
        <Link to="/recipes" className="btn btn-success btn-lg">
          Посмотреть рецепты блюд
        </Link>
      </div>
    </div>
  );
}

export default Home;
