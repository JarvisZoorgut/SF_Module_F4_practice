import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error('Ошибка загрузки категорий:', err);
        setError('Не удалось загрузить категории');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/recipes/', {
        title,
        description,
        ingredients,
        instructions,
        category_id: category,  // отправляем category_id
      });
      setSuccess(true);
      setTimeout(() => {
        navigate(`/recipes/${response.data.id}`);
      }, 1500);
    } catch (err) {
      console.error('Ошибка при добавлении рецепта:', err.response?.data || err.message);
      setError('Ошибка при добавлении рецепта');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Добавить рецепт</h2>

      {success && (
        <div className="alert alert-success" role="alert">
          Рецепт успешно создан! Переход...
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Название</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Введите название рецепта"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Описание</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Введите краткое описание"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ингредиенты</label>
          <textarea
            className="form-control"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            placeholder="Перечислите ингредиенты (каждый с новой строки)"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Инструкции</label>
          <textarea
            className="form-control"
            rows="5"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            placeholder="Опишите пошагово приготовление"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Категория</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Выберите категорию</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <Link to="/" className="btn btn-secondary">На главную</Link>
          <button type="submit" className="btn btn-success ml-3">Создать</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
