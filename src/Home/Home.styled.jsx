import Slider from "react-slick";
import styled from "styled-components";

export const SliderStl = styled(Slider)`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`  

export const SliderItem = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 250px;
  background-color: #1a1a1a;
  border-radius: 10px;

  &:hover div {
    opacity: 1;
  }
`;

export const ImgStl = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0 0;
  opacity: 0.65;
`

export const ImgHover = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  background-color: rgb(255, 189, 87, 0.3);
  border-radius: 8px;
`