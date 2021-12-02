interface MovieResponse {
    results: Movie[]
}

export interface Movie {
    "adult": false,
    "backdrop_path": "/6KJcFFE1iBPC0Xj0iPCcmMvS5WK.jpg",
    "genre_ids": [
      14,
      28,
      35,
      80
    ],
    "id": 49524,
    "original_language": "en",
    "original_title": "R.I.P.D.",
    "overview": "A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him. Based on the comic by Peter M. Lenkov.",
    "popularity": 50.374,
    "poster_path": "/fQ7CI5zmmhZlHuYBFKgK9w4hwlS.jpg",
    "release_date": "2013-07-18",
    "title": "R.I.P.D.",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 3018
}

export default MovieResponse;