import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Movie Explorer/Component/Home/index";
import About from "./Movie Explorer/Component/About/index";
import Contact from "./Movie Explorer/Component/Contact/index";
import MovieDetail from "./Movie Explorer/Component/MovieDetails/index";
import SearchResults from "./Movie Explorer/Component/SearchResults/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="*"
          element={
            <h1 style={{
              textAlign: "center",
              color: "#00ffe5",
              fontFamily: "Orbitron, sans-serif",
              padding: "5rem"
            }}>
              404 - Page Not Found 🤖
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
