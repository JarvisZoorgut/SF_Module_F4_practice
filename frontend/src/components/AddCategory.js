import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddCategory() {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/categories/', { name });
      setSuccess(true);
      setTimeout(() => {
        navigate(`/categories/${response.data.id}`);
      }, 1500);
    } catch (error) {
      console.error('Ошибка при добавлении категории:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Добавить категорию</h2>
      {success && <div className="alert alert-success">Категория успешно создана! Переход...</div>}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Название категории</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <Link to="/" className="btn btn-secondary">На главную</Link>
          <button type="submit" className="btn btn-primary ml-3">Создать</button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
