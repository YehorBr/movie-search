import { NavLink, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import {
  HeaderStl,
  TextContainer,
  NavLinkCont,
  NavLinkStl,
} from "./Header/Header.styled";
import { Container } from "./Container/Container";
import { FooteStl } from "./Footer/Footer.styled";
import { HashLink } from "react-router-hash-link";

export const Layout = () => {
  return (
    <>
      <HeaderStl>
        <Container>
          <TextContainer>
            <li>
              <NavLinkStl to="/">
                <img width="80" src={logo} alt="Logo" />
              </NavLinkStl>
            </li>
            <li>
              <NavLinkStl to="/">Home</NavLinkStl>
            </li>
            <li>
              <HashLink smooth to="/#trending">Trendings</HashLink>
            </li>
            <li>
              <NavLinkStl to="/movies">Movies</NavLinkStl>
            </li>
          </TextContainer>
        </Container>
      </HeaderStl>
      <main>
        <Outlet />
      </main>
      <FooteStl>
        <ul>
          <li>
             <NavLinkStl to="/">
                <img width="80" src={logo} alt="Logo" />
              </NavLinkStl>
          </li>
          <li><NavLinkStl to="/privacy-policy">Privacy Policy</NavLinkStl></li>
          <li></li>
        </ul>
      </FooteStl>
    </>
  );
};
