import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data.json')
      .then(res => res.json())
      .then(data => {
        const foundRecipe = data.find(r => r.id === Number(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          navigate('/');
        }
      })
      .catch(() => {
        navigate('/');
      });
  }, [id, navigate]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        &larr; Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-blue-600">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
        loading="lazy"
      />

      <p className="mb-6 text-gray-700">{recipe.summary}</p>

      <section className="mb-8 p-4 bg-gray-50 rounded-md shadow-inner">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="p-4 bg-gray-50 rounded-md shadow-inner">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
