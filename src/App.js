import React from 'react';
import './App.css';

import BookList from "./components/BooksList";


function App() {
  return (
    <div className="">
      <nav className="navbar navbar-dark bg-dark text-light">
        Harry's Adventure Series
      </nav>

      <BookList />

      <footer className="card-footer text-light bg-dark">
        <p className="text-center">2019</p>
      </footer>

    </div>
  );
}

export default App;
