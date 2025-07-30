import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/githubAPI';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: '2rem' }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App; import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;

