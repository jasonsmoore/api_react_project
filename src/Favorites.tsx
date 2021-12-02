import { Link } from "react-router-dom";

function Favorites() {
    return (
        <div>
            <Link to='/'>Home</Link> <Link to='/movie-info'>Movie Info</Link>
            <h1>Favorite Bacon!</h1>
        </div>
    )
};

export default Favorites;