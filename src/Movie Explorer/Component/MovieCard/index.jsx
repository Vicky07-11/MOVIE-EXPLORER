import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
      </Link>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <div className="card-footer">
          <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
          <Link to={`/movie/${movie.id}`} className="details-btn">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
