import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub User Search</h1>
      <p style={styles.subtitle}>Start building your search feature here.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#24292e',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#586069',
  },
};

export default App;
