import styled from "styled-components";

export const PolicyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
  color: #f5f5f5;
  text-align: center;
`;

export const PolicyTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: #ffbc57;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #ff914d;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const OrderedList = styled.ol`
  margin: 40px auto 20px auto;
  padding-left: 0;
  display: inline-block;
  text-align: center;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const UnorderedList = styled.ul`
  list-style: disc;
  margin: 20px auto;
  padding-left: 0;
  display: inline-block;
  text-align: center;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;