import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 25px;

    & li:first-child{
        background-color: rgb(255, 189, 87, 0.9);
        border-radius: 12px;
        padding: 0 5px;
    }

    & li:not(:first-child){
        background-color: #1a1a1a;
        padding: 0 5px;
        border-radius: 12px;
    }
    
    & li:not(:last-child){
        margin-right: 10px;
        }
`

export const MainImg = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 570px;
  border-radius: 0 0 15px 15px;

  opacity: 0.7;
`