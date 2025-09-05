import { NavLink } from "react-router-dom";
import styled from "styled-components";

// #242424

export const HeaderStl = styled.header`
  background-color: #1a1a1a;
  padding: 10px 0;
`;

export const TextContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkCont = styled.div`
  margin-right: auto;
`;

export const NavLinkStl = styled(NavLink)`
    font-weight: 450;
`
