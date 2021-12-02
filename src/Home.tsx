import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <Link to='/favorite-bacon'>Favorite Bacon</Link>
            <h1>Bacon Search!</h1>
            <form className='searchTitle'>
                <label>
                    <strong> Title: </strong>
                    <input />
                </label>
                <button type='submit'>Search</button>
                <label>
                    <strong> Genre: </strong>
                    <input />
                </label>
                <button type='submit'>Search</button>
                <label>
                    <strong> Release Date: </strong>
                    <input />
                </label>
                <button type='submit'>Search</button>
                <button type='submit'>Bacon Me</button>
            </form>
        </div>
    )
};

export default Home;