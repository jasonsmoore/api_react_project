import axios from "axios";
import { Movie } from "./MovieInterface";


export function GetMovies() : Promise<Movie[]>{
    return axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=397a07480729e1da40ac2ef7d2ffc3db&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_people=4724')
        .then(response => response.data);
}

export default GetMovies;