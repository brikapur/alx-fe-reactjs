// src/components/recipeStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],

      // Add recipe
      addRecipe: (newRecipe) =>
        set((state) => {
          const updatedRecipes = [...state.recipes, newRecipe];
          return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      // Delete recipe
      deleteRecipe: (id) =>
        set((state) => {
          const updatedRecipes = state.recipes.filter((r) => r.id !== id);
          return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      // Update recipe
      updateRecipe: (updatedRecipe) =>
        set((state) => {
          const updatedRecipes = state.recipes.map((r) =>
            r.id === updatedRecipe.id ? updatedRecipe : r
          );
          return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      // Update search term
      setSearchTerm: (term) =>
        set((state) => ({
          searchTerm: term,
          filteredRecipes: state.recipes.filter((r) =>
            r.title.toLowerCase().includes(term.toLowerCase())
          ),
        })),
    }),
    { name: 'recipe-storage' }
  )
);
