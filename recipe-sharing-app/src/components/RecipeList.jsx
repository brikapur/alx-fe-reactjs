import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.searchTerm ? state.filteredRecipes :state.recipes);

  if (recipes.length === 0) return <p>No recipes yet!</p>;

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3 style={{ cursor: 'pointer'}}>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
