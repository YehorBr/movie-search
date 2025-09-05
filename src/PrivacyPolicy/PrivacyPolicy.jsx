import { useEffect } from "react";
import { Container } from "../Container/Container"
import { 
  PolicyTitle, 
  SectionTitle, 
  Paragraph, 
  OrderedList, 
  UnorderedList, 
  ListItem 
} from "./PrivacyPolicy.styled";


export const PrivacyPolicy = () => {
  
      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

   return (
    <Container>
      <PolicyTitle>MovieHunt Privacy Policy</PolicyTitle>
      <SectionTitle>Effective Date: September 4, 2025</SectionTitle>

      <Paragraph>
        MovieHunt (“we”, “our”, or “the Site”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
      </Paragraph>

      <OrderedList>
        <ListItem>
          <SectionTitle>Information We Collect</SectionTitle>
          <Paragraph>We may collect the following types of information:</Paragraph>
          <UnorderedList>
            <ListItem>
              <Paragraph>Personal Information: such as your name, email address, or any other data you provide when signing up or contacting us.</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Non-Personal Information: such as browser type, device information, IP address, and usage patterns to improve the user experience.</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Cookies and Tracking: we may use cookies or similar technologies to track your preferences and enhance your experience on our site.</Paragraph>
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <Paragraph>We use the collected information to:</Paragraph>
          <UnorderedList>
            <ListItem><Paragraph>Provide and maintain our services.</Paragraph></ListItem>
            <ListItem><Paragraph>Personalize your experience on the Site.</Paragraph></ListItem>
            <ListItem><Paragraph>Communicate with you about updates, offers, or newsletters (if you have opted in).</Paragraph></ListItem>
            <ListItem><Paragraph>Analyze site usage to improve content and features.</Paragraph></ListItem>
            <ListItem><Paragraph>Ensure security and prevent fraudulent or unauthorized activities.</Paragraph></ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <SectionTitle>Sharing Your Information</SectionTitle>
          <Paragraph>We do not sell or rent your personal information. We may share information with:</Paragraph>
          <UnorderedList>
            <ListItem><Paragraph>Service providers who help us operate the Site (e.g., hosting, analytics).</Paragraph></ListItem>
            <ListItem><Paragraph>Legal authorities if required by law or to protect our rights.</Paragraph></ListItem>
            <ListItem><Paragraph>In case of a business transfer, merger, or acquisition.</Paragraph></ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <SectionTitle>Your Rights</SectionTitle>
          <Paragraph>Depending on your location, you may have the right to:</Paragraph>
          <UnorderedList>
            <ListItem><Paragraph>Access, correct, or delete your personal information.</Paragraph></ListItem>
            <ListItem><Paragraph>Opt out of marketing communications.</Paragraph></ListItem>
            <ListItem><Paragraph>Restrict or object to certain data processing.</Paragraph></ListItem>
            <ListItem><Paragraph>Withdraw consent at any time where applicable.</Paragraph></ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <SectionTitle>Security</SectionTitle>
          <Paragraph>We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure.</Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>External Links</SectionTitle>
          <Paragraph>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.</Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Children’s Privacy</SectionTitle>
          <Paragraph>MovieHunt does not knowingly collect personal information from children under 13 years old. If you believe we have collected such data, please contact us to have it removed.</Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Changes to This Policy</SectionTitle>
          <Paragraph>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.” We encourage you to review this page periodically.</Paragraph>
        </ListItem>

        <ListItem>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>If you have questions or concerns about this Privacy Policy, please contact us at:</Paragraph>
          <Paragraph><strong>Email:</strong> support@moviehunt.com</Paragraph>
        </ListItem>
      </OrderedList>
    </Container>
  )
}