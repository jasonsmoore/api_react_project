import axios from "axios";
import { Movie } from "./MovieInterface";
import Genre from "./GenreInterface";

const movieApiKey : string = process.env.REACT_APP_MOVIE_API_CREDS || '';

// general function for getting all movies with KB
// as well as getting year/date

export function GetMovies(year?: string, genre?: string) : Promise<Movie[]>{
    console.log(genre)
    return axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_people=4724&primary_release_year=${year}&with_genres=${genre}`)
        .then(response => {console.log(response.data.results)
            return response.data.results
    })
};

// potential function for keyword title search?

// export function KeywordSearch() : Promise<Movie[]> {
//     return axios
//         .get(`https://api.themoviedb.org/3/search/keyword?api_key=${movieApiKey}&query=http%3A%2F%2Flocalhost%3A3000%2F&page=1`)
//         .then(response => {console.log(response.data.results)
//             return response.data.results
//         })
// };

export function TitleSearch(title: string) : Promise<Movie[]> {
    return axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${movieApiKey}&language=en-US&query=${title}&include_adult=false`)
        .then(response => {console.log(response.data.results)
            return response.data.results
    })
}

// potential function for getting genre?

export function GenreSearch() : Promise<Genre[]> {
    return axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${movieApiKey}&language=en-US`)
        .then(response => {console.log(response.data.genres)
            return response.data.genres
        })
};

export default GetMovies;