import styled from "styled-components";

export const HeroBgc = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  padding: 230px 0;

  background: linear-gradient(
    155deg,
    rgb(255, 188, 87, 0.3) 40%,
    rgb(255, 145, 77, 0.4) 100%
  );
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background: url(${({ img }) => img}) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -2; 
  opacity: 0.15;
`
