import React, { useState, useEffect } from "react";
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);
return (
    <div>
      <h1>Recipe Sharing Platform</h1>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-red-600 mb-4">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;