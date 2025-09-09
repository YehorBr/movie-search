import { useLoaderData } from "react-router-dom";
import { Container } from "../Container/Container";
import { SliderItem } from "./Cast.styled";
import Slider from "react-slick";

export const Cast = () => {
  const castData = useLoaderData();

  const settings = {
    dots: false,
    infinite: false,
    speed: 410,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h2 style={{marginBottom:"25px"}}>Cast</h2>
        <Slider {...settings}>
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
        <Slider {...settings}>
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
