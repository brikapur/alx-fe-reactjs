import {create} from 'zustand'
import {persist} from 'zustand/middleware'
 export const useRecipeStore = create(
    persist(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes:
        [...state.recipes, newRecipe] })),
        setRecipes: (recipes) => set({ recipes })

    })));
    //delete a recipe by id
    deleteRecipe : (id)=> set ((state) => ({ recipes: state.recipes.filter((recipe)=> recipe.id !==id),

    }));
    //update a recipe by id
    updateRecipe: (updatedRecipe) => set ((state) => ({
        recipes: state.recipes.map((recipe)=>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe ),
    }));
    { name: 'recipe-storage'} 