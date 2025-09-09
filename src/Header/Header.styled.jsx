import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

// #242424

export const HeaderStl = styled.header`
  background-color: #1a1a1a;
  padding: 10px 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const LogoLinkStl = styled(NavLink)`
  display: inline-block;
`;

export const NavLinkStl = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  padding: 6px 12px;

  &:hover {
    color: #fff;
    background-color: #252525;
    border-radius: 20px;
  }
  
`;

export const HashLinkStl = styled(HashLink)`
  font-weight: 500;
  font-size: 18px;
  padding: 6px 12px;

  &:hover {
    color: #fff;
    background-color: #252525;
    border-radius: 20px;
  }
`;
