import { useState } from "react";
import { Container } from "../Container/Container";
import { IoIosSearch } from "react-icons/io";
import { searchMovie } from "../Api/serverApi";
import { Link } from "react-router-dom";
import { Form, MoviesList, MovieCard } from "./Movies.styled";

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);

  const filteredSearch = res.filter((obj) => {
    return obj.media_type !== "person" && obj.backdrop_path;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    searchMovie(query).then((res) => setRes(res.results));
  };


  return (
    <Container>
      <h1 style={{ marginBottom: "35px", marginTop: "35px" }}>Search Movies</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Your Movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <IoIosSearch size={20} />
        </button>
      </Form>

      <MoviesList>
        {filteredSearch.map((obj) => {
          const poster = obj.poster_path
            ? `https://image.tmdb.org/t/p/w300${obj.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image";

          return (
            <MovieCard key={obj.id}>
              <Link to={`/movies/${obj.media_type}/${obj.id}`}>
                <img src={poster} alt={obj.title || obj.name} />
                <div className="hover-layer" />
                <p>{obj.title || obj.name}</p>
              </Link>
            </MovieCard>
          );
        })}
      </MoviesList>
    </Container>
  );
};
