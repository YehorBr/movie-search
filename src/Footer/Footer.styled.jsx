import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooteStl = styled.footer`
  background-color: #1a1a1a;
  padding: 40px 20px;
  color: #f1f1f1;
  font-size: 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;


export const FooterLinksAndText = styled.div`
  display: flex;
  justify-content: center;  
  gap: 50px;               
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;


export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const FooterLogo = styled.div`
  margin-bottom: 20px;

  img {
    width: 90px;
    display: block;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;

    img {
      margin: 0 auto;
    }
  }
`;


export const FooterLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  padding: 6px 12px;
  margin-bottom: 8px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background-color: #252525;
  }
`;


export const FooterText = styled.p`
  margin: 8px 0;
  color: #b0b0b0;
  font-size: 14px;
`;