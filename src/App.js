import React from 'react';
import './App.css';

import BookList from "./components/BooksList";


function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark text-light">
       <h5>Harry's Adventure Series</h5>
      </nav>

      <BookList />

      <footer className="card-footer text-light bg-dark">
        <p className="text-center">2019</p>
      </footer>
    </div>
  );
}

export default App;
