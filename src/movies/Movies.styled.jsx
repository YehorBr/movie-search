import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px 15px;
    border-radius: 8px 0 0 8px;
    border: none;
    font-size: 16px;


    &:focus{
        border: none;
    }
  }

  button {
    padding: 0 15px;
    border: none;
    background-color: #1a1a1a;
    color: #fff;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: rgb(255, 189, 87, 0.9);
    }
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
  justify-content: center;
`;

export const MovieCard = styled.li`
  width: 180px;
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px 10px 0 0;
    opacity: 0.65;
    transition: opacity 0.3s ease;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 500;
  }

  div.hover-layer {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 189, 87, 0.3);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.65;
  }

  &:hover div.hover-layer {
    opacity: 1;
  }
`;