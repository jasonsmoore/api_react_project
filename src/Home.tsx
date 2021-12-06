import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetMovies, GenreSearch, TitleSearch} from "./GetMovies";
import { Movie } from "./MovieInterface";
import Genre from "./GenreInterface";

function Home({ addFavorite }: { addFavorite: (movie: Movie) => void }) {
    const [date, getDate] = useState('')
    const [titles, getTitles] = useState('')
    const [rating, getRating] = useState('')
    const [movies, getMovies] = useState<Movie[]>([])
    const [genres, getGenre] = useState<Genre[]>([])
    const [selectGenre, setSelectGenre] = useState('')

    useEffect(() => {
        GenreSearch()
            .then((genre) => {
                getGenre(genre);
            })
    }, [])

    return (
        <div>
            <Link to='/favorite-bacon'>Favorite Bacon</Link>
            <label>
                    <strong> Search Any Movie: </strong>
                    <form className='searchTitle' onSubmit={(e) => {
                    e.preventDefault()
                    console.log(selectGenre)
                    TitleSearch(titles)
                    .then((response) => {
                        getMovies(response)
                    })
                    getDate('')
            }}>
                        <input 
                            value={titles}
                            onChange={e => getTitles(e.target.value)}
                            name='title'
                        />
                        <button>Search</button>
                    </form>
            </label>
            <h1>Bacon Search!</h1>
            <form className='searchTitle' onSubmit={(e) => {
                e.preventDefault()
                console.log(selectGenre)
                GetMovies(date, selectGenre, rating)
                    .then((response) => {
                        getMovies(response)
                    })
                getDate('')
            }}>
                <label>
                    <strong> Genre: </strong>
                    {/* pulls the information from api/id
                    to display the genre and
                    then finds the information to display
                    the correct genre when selected
                    STILL NEEDS WORK */}
                    <select 
                        id='genres'
                        name='genres' 
                        onChange={e => {
                            const genreId = genres.find(genre => 
                                genre.name === e.target.value)?.id.toString() || ''
                            console.log(e.target.value)
                            setSelectGenre(e.target.value)}}>
                            <option> </option>
                        {genres.map((genre) => {
                            return <option value={genre.id}>{genre.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    <strong> Release Date: </strong>
                    {/* displays movies by date
                    still needs work or
                    more specification */}
                    <input 
                        value={date}
                        onChange={e => getDate(e.target.value)}
                        name='date'
                    />
                </label>
                <label>
                    <strong> Rating: </strong>
                    <input
                        value={rating}
                        onChange={e =>{getRating(e.target.value)}}
                        name='rating'
                    />
                </label>
                <button type='submit'>Search</button>
                {/* <button type='submit'>Bacon Me</button> */}
            </form>
            <div>
                {/* displays list of movies
                per search criteria */}
                <ul>
                    {movies.map((movie, i) => {
                        return <li>
                            {movie.title} - 
                            {movie.release_date} - 
                            {movie.vote_average} - 
                            <button type='submit' onClick={() => {
                                addFavorite(movie)
                            }}>Add to my favorites!</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Home;