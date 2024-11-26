import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './Component/MovieCard';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    setError('');

    const API_KEY = 'de82dbde';
    const URL = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="App">
      <h1>Recherche de Film</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Recherchez un film/série"
        />
        <button type="submit">Rechercher</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
