import { useLoaderData } from "react-router-dom";
import { Container } from "../Container/Container";
import { SliderItem } from "./Cast.styled";
import Slider from "react-slick";
import { useWindowSize } from "react-use";

export const Cast = () => {
  const castData = useLoaderData();

  const { width } = useWindowSize();

  const slidesToShow = width >= 1200 ? 4 : width >= 768 ? 2 : 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 410,
    slidesToShow,
    slidesToScroll: slidesToShow,
  };

  return (
    <>
      <Container>
        <h2 style={{marginBottom:"25px"}}>Cast</h2>
        <Slider {...settings} style={{width: "320px", marginLeft: "auto", marginRight: "auto" }}>
          {castData.cast
            ?.filter((castItem, index, arr) => {
              return (
                index === arr.findIndex((arrItem) => arrItem.id === castItem.id)
              );
            })
            .map((castItem) => {
              if (castItem.profile_path !== null) {
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
                    <p style={{color: "rgb(255, 255, 255, 0.5)"}}>{castItem.character}</p>
                  </SliderItem>
                );
              }
            })}
        </Slider>

        <h2 style={{marginBottom:"25px"}}>Crew</h2>
        <Slider {...settings} style={{width: "320px", marginLeft: "auto", marginRight: "auto" }}>
          {castData.crew
            ?.filter((crewItem, index, arr) => {
              return (
                index === arr.findIndex((arrItem) => arrItem.id === crewItem.id)
              );
            })
            .map((crewItem) => {
              if (crewItem.profile_path !== null) {
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
                    <p style={{color: "rgb(255, 255, 255, 0.5)"}}>{crewItem.known_for_department}</p>
                  </SliderItem>
                );
              }
            })}
        </Slider>
      </Container>
    </>
  );
};
