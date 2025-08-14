import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Failed to load recipes:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Recipe Sharing Platform</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map(({ id, title, summary, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 text-sm">{summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
