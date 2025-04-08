import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  console.log("Home component loaded");
  
  return (
    <div>
      <h1>Добро пожаловать в приложение с рецептами!</h1>
      <p>
        <Link to="/categories">Посмотреть категории блюд</Link>
      </p>
    </div>
  );
}

export default Home;
