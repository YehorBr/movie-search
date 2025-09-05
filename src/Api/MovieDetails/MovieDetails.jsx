import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Container } from "../../Container/Container";
import { List, MainImg } from "./MovieDetails.styled";
import { useEffect } from "react";



export const MovieDetails = () => {
  const movie = useLoaderData();
  const { type } = useParams();

    console.log(movie);

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movie]);

  return (
    <>

      <MainImg img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
      <Container>
        <h1 style={{marginTop: "25px",}}>{movie.title || movie.name}</h1>

        <List>
          <li>
            <p>
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4) ||
                "N/A"}
            </p>
          </li>
          {movie.genres?.map((genre) => {
            return (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            );
          })}
        </List>

        <h2>Overview</h2>
        <p>{movie.overview ? movie.overview : movie.title}</p>

        <Link to={`/movies/${type}/${movie.id}/cast`}>Cast</Link>
        <Link to={`/movies/${type}/${movie.id}/reviews`}>Reviews</Link>

        <Outlet />
      </Container>
    </>
  );
};
