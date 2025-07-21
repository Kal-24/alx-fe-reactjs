import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Kal" age={24} bio="Aspiring software engineer." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
