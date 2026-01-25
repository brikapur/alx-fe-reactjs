import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
     <div className="app">
      <h1>My Recipe App</h1>

    <Routes>
      <Route 
      path= "/" 
      element={<>
      <AddRecipeForm />
      <RecipeList />
      </>
      }
       />
      <Route path= "/recipes/:id" element= {<RecipeDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;
