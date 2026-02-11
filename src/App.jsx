import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookShelf from './components/BookShelf/BookShelf.jsx'

// src/App.jsx

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <BookShelf />
    </>
  );
};

export default App;