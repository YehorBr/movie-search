import { Link, useLoaderData } from "react-router-dom";
import { SliderItem, ImgStl, ImgHover,SliderStl } from "./Home.styled";
import Slider from "react-slick";
import { Hero } from "../Hero/Hero";
import { Container } from "../Container/Container";
import { useWindowSize } from 'react-use';

export const HomePage = () => {
  const trendingData = useLoaderData();
  const trendingMovies = trendingData.results;

  const filteredTrendingMovie = trendingMovies.filter(
    (movie) => movie.media_type !== "person"
  );

  const { width } = useWindowSize();

  const slidesToShow = width >= 1200 ? 4 : width >= 768 ? 2 : 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow,
    slidesToScroll: slidesToShow,
  };
  return (
    <>
      <Hero />

      <Container>
        <section id="trending" >
          <h2>Trendings</h2>

          <SliderStl
            {...settings}
          >
            {filteredTrendingMovie.map((trendingMovie) => {
              return (
                <SliderItem key={trendingMovie.id}>
                  <Link
                    to={`/movies/${trendingMovie.media_type}/${trendingMovie.id}`}
                  >
                    <ImgStl
                      src={`https://image.tmdb.org/t/p/w400${trendingMovie.poster_path}`}
                      alt=""
                    />
                    <p>{trendingMovie.title || trendingMovie.name}</p>
                    <ImgHover />
                  </Link>
                </SliderItem>
              );
            })}
          </SliderStl>
        </section>
      </Container>
    </>
  );
};
