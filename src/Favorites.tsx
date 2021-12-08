import { Link } from "react-router-dom";
import { Movie } from "./MovieInterface";

function Favorites({ favorite, handleDelete } : { handleDelete: (i: number) => void, favorite: Movie[] }) {
  return (
    <div>
      
      <h1>My Favorite Kevins</h1>
      <ul>
        {favorite.map((movie, i) => {
          return (
            <li>
              <Link to={`/movie-info/${i}`}>{movie.title}</Link> -{movie.release_date} -{movie.vote_average}
              <button
                type="submit"
                onClick={() => {
                    handleDelete(i);
                }}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default Favorites;
