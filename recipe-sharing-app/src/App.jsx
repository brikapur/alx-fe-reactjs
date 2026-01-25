import { useState } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AppRecipeForm from './components/AppRecipeForm'

function App() {
  const [recipes, setRecipes] = useState ([]);

const addRecipe = (newRecipe) => {
  setRecipes([...recipes,newRecipe]);
};
  return (
    <div className ="app">
      <h1>My Recipe App</h1>
      {/* Form to add recipes */}
      <AppRecipeForm onAddRecipe = {addRecipe} />
      <RecipeList recipes ={recipes} />
    </div>
    
  );
}

export default App;
