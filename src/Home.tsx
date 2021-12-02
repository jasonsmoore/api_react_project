import { Link } from "react-router-dom";
import { useState } from "react";
import GetMovies from "./GetMovies";
import { Movie } from "./MovieInterface";

function Home() {
    const [date, getDate] = useState('')
    const [movies, getMovies] = useState<Movie[]>([])
    console.log('movies:', movies)
    return (
        <div>
            <Link to='/favorite-bacon'>Favorite Bacon</Link>
            <h1>Bacon Search!</h1>
            <form className='searchTitle' onSubmit={(e) => {
                e.preventDefault()
                GetMovies(date)
                    .then((response) => {
                        getMovies(response)
                    })
            }}>
                <label>
                    <strong> Title: </strong>
                    <input />
                </label>
                <label>
                    <strong> Genre: </strong>
                    <select id='genres' name='genres'>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Animation</option>
                        <option>Comedy</option>
                        <option>Crime</option>
                    </select>
                </label>
                <label>
                    <strong> Release Date: </strong>
                    <input 
                        value={date}
                        onChange={e => getDate(e.target.value)}
                        name='date'
                    />
                </label>
                <button type='submit'>Search</button>
                {/* <button type='submit'>Bacon Me</button> */}
            </form>
            <div>
                <ul>
                    {movies.map((movie, i) => {
                        return <li>{movie.title} - {movie.release_date}</li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Home;