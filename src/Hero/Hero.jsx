import { Container } from "../Container/Container";
import { HeroBgc, HeroBg } from "./Hero.styled";
import img from "../images/bgc.jpg"

export const Hero = () => {
  return (
    <>
    <HeroBgc>
    <HeroBg img={img}/>
      <Container>
        <h1>Welcome to MovieHunt</h1>
        <p>Explore the world of cinema</p>
      </Container>
      </HeroBgc>
    </>
  );
};
