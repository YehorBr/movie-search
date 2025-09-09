import { useEffect } from "react";
import { 
  PolicyContainer, 
  PolicyTitle, 
  SectionTitle, 
  Paragraph, 
  OrderedList, 
  UnorderedList, 
  ListItem 
} from "../PrivacyPolicy/PrivacyPolicy.styled";

export const Terms = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PolicyContainer>
      <PolicyTitle>MovieHunt Terms of Service</PolicyTitle>
      <SectionTitle>Effective Date: September 4, 2025</SectionTitle>

      <Paragraph>
        Welcome to MovieHunt! By using this site, you agree to the following terms and conditions:
      </Paragraph>

      <OrderedList>
        <ListItem>
          <SectionTitle>Use of the Site</SectionTitle>
          <Paragraph>
            MovieHunt allows you to browse trending movies, search for films, and view movie details. 
            You are not allowed to watch movies directly on this site.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Educational Purpose</SectionTitle>
          <Paragraph>
            This site is created for educational purposes only. Any movie data displayed is for informational use.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Third-Party Data</SectionTitle>
          <Paragraph>
            Movie data is provided by TheMovieDB API. We do not guarantee the accuracy or completeness of this data.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>User Conduct</SectionTitle>
          <Paragraph>
            You agree not to misuse the site, attempt to hack it, or copy data without permission.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Disclaimer</SectionTitle>
          <Paragraph>
            MovieHunt is not responsible for any errors in content, technical issues, or third-party links.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Changes to Terms</SectionTitle>
          <Paragraph>
            We may update these Terms of Service at any time. Changes will be posted on this page with an updated effective date.
          </Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about these terms, please contact us at: <strong>support@moviehunt.com</strong>
          </Paragraph>
        </ListItem>
      </OrderedList>
    </PolicyContainer>
  );
};