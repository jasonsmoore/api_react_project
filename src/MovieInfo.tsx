import { useParams } from "react-router";
import Favorites from "./Favorites";
import { Movie } from "./MovieInterface";
import { Link } from "react-router-dom";

function MovieInfo({ favorite} : {favorite: Movie[] }) {
    

    let id = parseInt(useParams().movieId as string);
    let movie = favorite[id];

    if(!movie) {
        return(
            <p>no.</p>
        )
    }else{

    return (
        <div>
            <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}></img>
            <p>{movie.release_date}</p>
            <p>Average rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
            <Link to='/'>Home</Link> <Link to='/favorite-bacon'>Favorites</Link>

        </div>
    )
    }
}

export default MovieInfo;