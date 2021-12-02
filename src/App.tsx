import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Favorites from './Favorites';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bacon Time!</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite-bacon' element={<Favorites />} />
          <Route path='/movie-info' element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;