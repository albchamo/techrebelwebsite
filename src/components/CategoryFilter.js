// src/components/CategoryFilter.js

import React, { useState, useEffect } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="category-filter-container">
        {categories.map(category => (
            <button 
                key={category} 
                className={`brutalist-category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
            >
                {category}
            </button>
        ))}
    </div>
);
};

export default CategoryFilter;
