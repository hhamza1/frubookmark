import React from 'react';
import Header from './Header';
import CardList from './CardList';
import './style/css/App.css';

function App() {
  return (
    <div className="container">
        <Header />
        <h2>List of Bookmarks</h2>
        <CardList />
    </div>
  );
}

export default App;
