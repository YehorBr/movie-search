const BASE_URL = "api.themoviedb.org/3"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODUwYWU3OTFiYTQ2NjRmNDYwMDg5ZDIxZWU4MmY1MiIsIm5iZiI6MTc1Mjg1OTQzMC4yNTksInN1YiI6IjY4N2E4MzI2YTMzY2IzMjdhMzcyYmViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FE4uOvvE49Ll6orWyWtFk6qhL7pGSAzDtSse_BPBL0I'
  }
};

export const getTrending = () => {
   return fetch(`https://${BASE_URL}/trending/all/day`, options).then(res=> res.json())
}

export const searchMovie = (query) =>{
   return fetch (`https://${BASE_URL}/search/multi?query=${query}`, options).then(res=> res.json())
}

export const getMovieDetails = ({params}) =>{
  const {movieId, type} = params

   return fetch(`https://${BASE_URL}/${type}/${movieId}`, options).then(res=> res.json())
}

export const getMovieCredits = ({params}) =>{
    const {movieId, type} = params

  return  fetch(`https://${BASE_URL}/${type}/${movieId}/credits`, options).then(res=> res.json())
}   

export const getMovieReviews = ({params}) =>{
    const {movieId, type} = params

    return fetch(`https://${BASE_URL}/${type}/${movieId}/reviews`, options).then(res=> res.json())
}