import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const API = "https://api.themoviedb.org/3/person";
const API_KEY = "2e7c00b844b0d3391e34a3ece74a80ef";

const CastDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    axios.get(`${API}/${id}?api_key=${API_KEY}`)
      .then(res => setPerson(res.data))
      .catch(console.error);

    axios.get(`${API}/${id}/movie_credits?api_key=${API_KEY}`)
      .then(res => setMovieCredits(res.data.cast))
      .catch(console.error);
  }, [id]);

  if (!person) return <p>Loading...</p>;

  return (
    <div className="cast-detail">
      <h1>{person.name}</h1>
      <img
        src={person.profile_path
          ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
          : "/fallback-profile.png"}
        alt={person.name}
      />
      <p><strong>Birthday:</strong> {person.birthday}</p>
      <p><strong>Place of Birth:</strong> {person.place_of_birth}</p>

      <hr />

      <h2>Overview</h2>
      <p><strong>Profession:</strong> {person.known_for_department}</p>
      <p><strong>Biography:</strong> {person.biography || "No bio available."}</p>

      <hr />

      <h2>All Movies</h2>
      <div className="movie-list">
        {movieCredits.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img  className="actor-image-container"
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "/no-poster.png"}
                alt={movie.title}
              />
            </Link>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p><strong>Character:</strong> {movie.character || "N/A"}</p>
              <p><strong>Release:</strong> {movie.release_date || "Unknown"}</p>
              <Link to={`/movie/${movie.id}`} className="details-btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastDetail;
