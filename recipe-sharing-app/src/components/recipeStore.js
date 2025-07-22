import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Task 0: Set all recipes
  setRecipes: (recipes) => set({ recipes }),

  // Task 1: Add, update, delete recipes
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Task 2: Search/filter recipes
  setSearchTerm:
