import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Favorites from "./Favorites";
import MovieInfo from "./MovieInfo";
import { Movie } from "./MovieInterface";

function App() {
  const [favorite, setFavorite] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorite((prevFavorite) => {
      return [...prevFavorite, movie];
    });
  };

  const handleDelete = (i: number) => {
    setFavorite((prevFavorite) => {
      return [...prevFavorite.slice(0, i), ...prevFavorite.slice(i + 1)];
    });
  };

  return (
    <Router>
      <div className="App">
        <div id="background">
          <header>
            <h1 id="title">KBDB</h1>
            <h2 id="tagline">The Kevin Bacon Database</h2>
          </header>
          <Routes>
            <Route path="/" element={<Home addFavorite={addFavorite} />} />
            <Route
              path="/favorite-bacon"
              element={
                <Favorites favorite={favorite} handleDelete={handleDelete} />
              }
            />
            <Route
              path="/movie-info/:movieId"
              element={<MovieInfo favorite={favorite} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
