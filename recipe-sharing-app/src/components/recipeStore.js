import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  // existing actions like addRecipe, deleteRecipe, updateRecipe...

  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filteredRecipes: [],
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // --- TASK 3 additions ---
  recommendations: [],

  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Simple example: recommend recipes not in favorites
    const recommended = recipes.filter(
      recipe => !favorites.includes(recipe.id)
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
