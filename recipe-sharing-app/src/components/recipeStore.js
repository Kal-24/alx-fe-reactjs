import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // Recipes data
  recipes: [],
  
  // Task 1
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe]
    })),
  setRecipes: (recipes) => set({ recipes }),

  // Task 2
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

  // Task 3
  searchTerm
