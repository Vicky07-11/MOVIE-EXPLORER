import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/index";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "./index.css";

const API_KEY = "2e7c00b844b0d3391e34a3ece74a80ef";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="robot-home">
        <h1 className="robot-heading">Popular Movies 🤖</h1>
        <div className="robot-movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
