export const fetcher = (...args) => fetch(...args).then(res => res.json())
export const apiKey = "d239edfabc54edf26e7cec35b25d50c7"
const tmdbEndpoint = "https://api.themoviedb.org/3/movie"
export const tmdbAPI = {
    getMovieList:(type,page = 1)=>`${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetail : (movieId) => `${tmdbEndpoint}/${movieId}?api_key=d239edfabc54edf26e7cec35b25d50c7`,
    getMovieCast : (movieId,type)=>`${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch : (query,page)=>`https://api.themoviedb.org/3/search/movie?api_key=d239edfabc54edf26e7cec35b25d50c7&query=${query}&page=${page}`,
    imageOriginal:(url)=>`https://image.tmdb.org/t/p/original/${url}`,
    image500:(url) =>`https://image.tmdb.org/t/p/w500/${url}`
};