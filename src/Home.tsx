import { Link } from "react-router-dom";
import { useState } from "react";
import GetMovies from "./GetMovies";
import MovieResponse from "./MovieInterface";

function Home() {
    const [date, getDate] = useState('')
    return (
        <div>
            <Link to='/favorite-bacon'>Favorite Bacon</Link>
            <h1>Bacon Search!</h1>
            <form className='searchTitle' onSubmit={(e) => {
                e.preventDefault()
                GetMovies(date)
            }}>
                <label>
                    <strong> Title: </strong>
                    <input />
                </label>
                <label>
                    <strong> Genre: </strong>
                    <input />
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
                <button type='submit'>Bacon Me</button>
            </form>
        </div>
    )
};

export default Home;