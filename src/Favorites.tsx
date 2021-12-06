import { Link } from "react-router-dom";
import { Movie } from "./MovieInterface";

function Favorites({favorite} : {favorite: Movie[]}) {
    return (
        <div>
            <Link to='/'>Home</Link> <Link to='/movie-info'>Movie Info</Link>
            <h1>Favorite Bacon!</h1>
            <ul>
            {favorite.map((movie, i) => {
                        return <li>
                            {movie.title} - 
                            {movie.release_date} - 
                            {movie.vote_average} 
                            <button type='submit'>Delete</button></li>
                    })}
            </ul>
        </div>
    )
};

export default Favorites;