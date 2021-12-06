import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import Favorites from './Favorites';
import MovieInfo from './MovieInfo';
import { Movie } from './MovieInterface';

function App() {
  const [favorite, setFavorite] = useState<Movie[]>([])

  const addFavorite = (movie: Movie) => {
    setFavorite((prevFavorite) => {
      return [...prevFavorite, movie]
    })
  }

  return (
    <Router>
      <div className="App">
        <h1>Bacon Time!</h1>
        <Routes>
          <Route path='/' element={<Home addFavorite={addFavorite}/>} />
          <Route path='/favorite-bacon' element={<Favorites favorite={favorite}/>} />
          <Route path='/movie-info' element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;