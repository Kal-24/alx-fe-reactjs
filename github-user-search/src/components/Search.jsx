import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    repos: ''
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await searchUsers(formData);
      if (results.length === 0) {
        setError("Looks like we can't find the user"); // **Exact error message here**
        setUsers([]);
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we can't find the user"); // same exact error for catch as well
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:items-end bg-white p-6 rounded shadow-md">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="repos"
          placeholder="Min Repositories"
          value={formData.repos}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded bg-white shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
{error && (
  <p className="text-red-500 mt-4">
    Looks like we can't find the user
  </p>
)}


export default Search;
