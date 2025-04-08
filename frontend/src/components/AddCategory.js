import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = {
      name,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/categories/', categoryData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Category created:', response.data);
    } catch (err) {
      setError('Error creating category');
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>Create a Category</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
