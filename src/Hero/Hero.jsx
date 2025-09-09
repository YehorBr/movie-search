import { Container } from "../Container/Container";
import { HeroBgc } from "./Hero.styled";
import img from "../images/bgc.jpg"

export const Hero = () => {
  return (
    <>
    <HeroBgc>
    {/* <HeroBg img={img}/> */}
      <Container>
        <h1>Welcome to MovieHunt</h1>
        <p style={{fontSize: "18px"}}>Explore the world of cinema</p>
      </Container>
      </HeroBgc>
    </>
  );
};
