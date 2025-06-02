import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../MovieCard/index";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "./index.css";

const API_KEY = "2e7c00b844b0d3391e34a3ece74a80ef";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError("");
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: API_KEY,
            query: query,
          },
        })
        .then((res) => setResults(res.data.results))
        .catch(() => setError("⚠️ Error fetching search results."))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="robot-search-page">
        <h1 className="robot-search-title">
          Search Results for <span className="robot-highlight">"{query}"</span> 🤖
        </h1>

        {loading && <p className="robot-message">🤖 Scanning the database...</p>}

        {error && <p className="robot-error">{error}</p>}

        {!loading && !error && results.length > 0 && (
          <div className="robot-movie-grid">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <p className="robot-message">🧠 No results found. Try a different keyword!</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
