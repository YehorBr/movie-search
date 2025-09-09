import styled from "styled-components";

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