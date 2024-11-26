import React from "react";
import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-details">
                <h2>{movie.Title}</h2>
                <p>Année : {movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;