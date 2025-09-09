import styled from "styled-components";
import Slider from "react-slick";


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
  box-sizing: border-box;
  max-width: 250px;
`;
