import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "./index.css";

const API_KEY = "2e7c00b844b0d3391e34a3ece74a80ef";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [cast, setCast] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showCast, setShowCast] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch(console.error);
  }, [id]);

  const fetchTrailer = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
    const trailer = res.data.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");
    if (trailer) {
      setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      setShowTrailer(true);
      setShowCast(false); // Hide cast if trailer is shown
    }
  };

  const fetchCast = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
    setCast(res.data.cast.slice(0, 5)); // top 5 cast members
    setShowCast(true);
    setShowTrailer(false); // Hide trailer if cast is shown
  };

  if (!movie) return <p className="robot-loading">Loading movie data... 🤖</p>;

  return (
    <>
      <Navbar />
      <div className="robot-movie-detail">
        <div className="robot-movie-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="robot-movie-poster"
          />
          <div className="robot-movie-info">
            <h1>{movie.title}</h1>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>

            <div className="robot-buttons">
              <button onClick={fetchTrailer} className="robot-btn">🎬 Show Trailer</button>
              <button onClick={fetchCast} className="robot-btn">🎭 Show Cast</button>
            </div>

            {showTrailer && trailerUrl && (
              <div className="robot-trailer">
                <iframe
                  width="100%"
                  height="400"
                  src={trailerUrl}
                  title="Movie Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {showCast && (
              <div className="robot-cast">
                <h2>Top Cast</h2>
                <div className="robot-cast-grid">
                  {cast.map((actor) => (
                    <div key={actor.id} className="robot-cast-card">
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                            : "https://via.placeholder.com/200x300?text=No+Image"
                        }
                        alt={actor.name}
                        className="robot-cast-img"
                      />
                      <div className="robot-cast-info">
                        <h4>{actor.name}</h4>
                        <p>as <strong>{actor.character}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;
