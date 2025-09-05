import { Link, useLoaderData } from "react-router-dom"
import { SliderItem, ImgStl, ImgHover } from "./Home.styled";
import Slider from "react-slick";
import { Hero } from "../Hero/Hero";
import { Container } from "../Container/Container";


export const HomePage = () =>{

    const trendingData = useLoaderData()
    const trendingMovies = trendingData.results

    const filteredTrendingMovie = trendingMovies.filter((movie)=>{
        return movie.media_type !== "person"
    }) 


    const settings = {
    dots: false,
    infinite: false,
    speed: 410,
    slidesToShow: 4,
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

    return <>


    <Hero/>

    <Container>
    <section id="trending">
    <h2>Trendings</h2>
    
    <Slider {...settings} style={{marginTop: "45px", marginBottom: "40px",}}>
        {filteredTrendingMovie.map((trendingMovie)=>{
            return <SliderItem key={trendingMovie.id}><Link to={`/movies/${trendingMovie.media_type}/${trendingMovie.id}`}>
            <ImgStl src={`https://image.tmdb.org/t/p/w300${trendingMovie.poster_path}`} alt="" />
            <p>{trendingMovie.title || trendingMovie.name}</p>
            <ImgHover/>
            </Link></SliderItem>
        })}
    </Slider>
    </section>
    </Container>
    </>
}