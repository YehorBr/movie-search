import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Container } from "../../Container/Container";
import { List, MainImg, AddInfoList, Time } from "./MovieDetails.styled";
import { useEffect } from "react";
import { useWindowSize } from 'react-use';



export const MovieDetails = () => {
  const movie = useLoaderData();
  const { type } = useParams();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movie]);

  const hours = parseInt(movie.runtime / 60)
  const min = movie.runtime % 60

  return (
    <>

      <MainImg img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
      <Container>
        <h1 style={{marginTop: "25px",}}>{movie.title || movie.name}</h1>

        <List>
          <li>
            <p style={{fontSize: "16px"}}>
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4) ||
                "N/A"}
            </p>
          </li>
          {movie.genres?.map((genre) => {
            return (
              <li key={genre.id}>
                <p style={{fontSize: "16px"}}>{genre.name}</p>
              </li>
            );
          })}
        </List>

        <h2 style={{fontSize: "24px", marginTop: "25px"}}>Overview</h2>
        <p style={{fontSize: "16px"}}>{movie.overview ? movie.overview : movie.title}</p>

          { type === "tv" ? <ul><li><Time>Seasons: {movie.number_of_seasons}</Time></li>
          <li><Time>Episodes: {movie.number_of_episodes}</Time></li></ul> : <Time>Runtime: {`${hours}h  ${min}m`}</Time> }

        <h2 style={{fontSize: "24px"}}>Additional information</h2>


        <AddInfoList style={{marginBottom: "25px", marginTop: "25px"}}>
          <li><Link to={`/movies/${type}/${movie.id}/cast`} style={{fontSize: "18px"}}>Cast</Link></li>
          <li><Link to={`/movies/${type}/${movie.id}/reviews`} style={{fontSize: "18px"}}>Reviews</Link></li>
        </AddInfoList>  
       
        

        <Outlet />
      </Container>
    </>
  );
};
