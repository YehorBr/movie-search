import { useLoaderData } from "react-router-dom";
import { Container } from "../Container/Container";
import { SliderItem, SliderStl } from "./Cast.styled";
import Slider from "react-slick";
import { useWindowSize } from "react-use";

export const Cast = () => {
  const castData = useLoaderData();

  const { width } = useWindowSize();

  const slidesToShow = width >= 1200 ? 4 : width >= 768 ? 3 : 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow,
    slidesToScroll: slidesToShow,
  };

  return (
    <>
      <Container>
        <h2 style={{ marginBottom: "25px" }}>Cast</h2>
        {castData.cast && castData.cast.length > 0 ? (
          <SliderStl {...settings}>
            {castData.cast
              .filter(
                (item, index, arr) =>
                  index === arr.findIndex((i) => i.id === item.id)
              )
              .map((castItem) => {
                if (!castItem.profile_path) return null;
                return (
                  <SliderItem
                    key={castItem.credit_id}
                    style={{ padding: "10px" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                      alt=""
                      style={{ borderRadius: "10px" }}
                    />
                    <p>{castItem.original_name}</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                      {castItem.character}
                    </p>
                  </SliderItem>
                );
              })}
          </SliderStl>
        ) : (
          <p>No information yet.</p>
        )}

        <h2 style={{ marginBottom: "25px" }}>Crew</h2>
        {castData.crew && castData.crew.length > 0 ? (
          <SliderStl {...settings}>
            {castData.crew
              .filter(
                (item, index, arr) =>
                  index === arr.findIndex((i) => i.id === item.id)
              )
              .map((crewItem) => {
                if (!crewItem.profile_path) return null;
                return (
                  <SliderItem
                    key={crewItem.credit_id}
                    style={{ padding: "10px" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${crewItem.profile_path}`}
                      alt=""
                      style={{ borderRadius: "10px" }}
                    />
                    <p>{crewItem.original_name}</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                      {crewItem.known_for_department}
                    </p>
                  </SliderItem>
                );
              })}
          </SliderStl>
        ) : (
          <p>No information yet.</p>
        )}
      </Container>
    </>
  );
};
