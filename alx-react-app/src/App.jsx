import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
