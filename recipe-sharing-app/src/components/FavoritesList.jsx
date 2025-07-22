import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  const favorites = favoriteIds
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
