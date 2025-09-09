import { NavLink, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import {
  HeaderStl,
  List,
  HashLinkStl,
  NavLinkStl,
  LogoLinkStl,
} from "./Header/Header.styled";
import { Container } from "./Container/Container";
import { FooteStl, FooterContainer, FooterColumn, FooterLogo, FooterLink, FooterText, FooterLinksAndText } from "./Footer/Footer.styled";
import { HashLink } from "react-router-hash-link";

export const Layout = () => {
  return (
    <>
      <HeaderStl>
        <Container>
          <List>
            <li>
              <LogoLinkStl to="/">
                <img width="80" src={logo} alt="Logo" />
              </LogoLinkStl>
            </li>
            <li>
              <NavLinkStl to="/">Home</NavLinkStl>
            </li>
            <li>
              <HashLinkStl smooth to="/#trending">
                Trendings
              </HashLinkStl>
            </li>
            <li>
              <NavLinkStl to="/movies">Movies</NavLinkStl>
            </li>
          </List>
        </Container>
      </HeaderStl>
      <main>
        <Outlet />
      </main>
      <FooteStl>
  <Container>
    <FooterContainer>
      <FooterLogo>
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
      </FooterLogo>

      <FooterLinksAndText>
        <FooterColumn>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterText>Email: support@moviehunt.com</FooterText>
          <FooterText>© 2025 MovieHunt. All Rights Reserved.</FooterText>
        </FooterColumn>
      </FooterLinksAndText>
    </FooterContainer>
  </Container>
</FooteStl>
    </>
  );
};
