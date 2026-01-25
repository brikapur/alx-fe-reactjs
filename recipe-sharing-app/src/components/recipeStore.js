import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      favorites: [],             // Track favorite recipe IDs
      recommendations: [],       // Recommended recipes

      // Add a new recipe
      addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

      // Delete recipe
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((r) => r.id !== id),
          favorites: state.favorites.filter((favId) => favId !== id), // remove from favorites if deleted
        })),

      // Update recipe
      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((r) =>
            r.id === updatedRecipe.id ? updatedRecipe : r
          ),
        })),

      // Favorites actions
      addFavorite: (recipeId) =>
        set((state) => ({
          favorites: [...state.favorites, recipeId],
        })),

      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),

      // Generate mock recommendations based on favorites
      generateRecommendations: () =>
        set((state) => {
          const recommended = state.recipes.filter(
            (recipe) =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5
          );
          return { recommendations: recommended };
        }),
    }),
    { name: 'recipe-storage' }
  )
);
