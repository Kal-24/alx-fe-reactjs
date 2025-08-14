import React, { useState } from 'react';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsCount = ingredients.split('\n').filter(i => i.trim() !== '').length;
      if (ingredientsCount < 2) newErrors.ingredients = 'Enter at least two ingredients.';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    // Here you would typically send the form data to a server or update state
    // For now, just log and clear form
    console.log({
      title,
      ingredients: ingredients.split('\n').map(i => i.trim()).filter(i => i !== ''),
      steps: steps.split('\n').map(s => s.trim()).filter(s => s !== ''),
    });

    alert('Recipe submitted!');
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
            }`}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g., Spaghetti Carbonara"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className={`w-full px-4 py-2 border rounded-md resize-y focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
            }`}
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            placeholder="e.g., 200g spaghetti\n100g pancetta\n2 eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            rows="5"
            className={`w-full px-4 py-2 border rounded-md resize-y focus:outline-none focus:ring-2 ${
              errors.steps ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
            }`}
            value={steps}
            onChange={e => setSteps(e.target.value)}
            placeholder="e.g., Boil water\nCook pasta for 8 minutes\nFry pancetta"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
