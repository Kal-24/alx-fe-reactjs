// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '250px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#0366d6',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  }
};

export default SearchBar;
