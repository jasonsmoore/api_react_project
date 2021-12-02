import axios from "axios";
import { useState } from "react";
import { Movie } from "./MovieInterface";

const movieApiKey : string = process.env.REACT_APP_MOVIE_API_CREDS || '';

export function GetMovies(year?: number) : Promise<Movie[]>{

    return axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_people=4724&year=${year}`)
        .then(response => {console.log(response.data)
            return response.data
    }); 
}

export default GetMovies;