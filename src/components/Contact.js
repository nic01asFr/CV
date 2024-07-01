import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-scroll-parallax';
import CloudAnimation from './CloudAnimation';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPdf from './CVPdf';


const ContactSection = styled.section`
  min-height: calc(100vh);
  text-align: center;
  color: var(--light-text-color);
  background: linear-gradient(var(--background-color), var(--primary-color) 90%);
  position: relative;
  overflow: hidden;
`;

const ContactInfo = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
`;

const ContactLink = styled.a`
  display: inline-flex;
  flex-wrap: no-wrap;
white-space: pre-line;
  word-break: break-word;
  align-items: center;
  justify-content: center;
  color: var(--light-text-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }

  .icon {
    margin-right: 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  &:hover .icon {
    color: var(--secondary-color);
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

`;

const SocialIconLink = styled(ContactLink)`
  width: auto;
  flex: 1;
  max-width: none;
`;

const DownloadButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--light-text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

function Contact() {
  return (
    <Parallax translateY={[0, -50]} opacity={[1, 0]} startScroll={0} endScroll={500}>
      <ContactSection id="contact">
        <CloudAnimation />
        <div className="container">
          <h2>Contact</h2>
          <ContactInfo>
            <ContactLink href="tel:+33616940053">
              <FontAwesomeIcon icon="phone" className="icon" />
              06 16 94 00 53
            </ContactLink>
            <ContactLink href="mailto:laval.nicolas13@gmail.com">
              <FontAwesomeIcon icon="envelope" className="icon" />
              laval.nicolas13@gmail.com
            </ContactLink>
            <SocialIconsContainer>
              <SocialIconLink href="https://github.com/Nic01asFr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
              </SocialIconLink>
              <SocialIconLink href="https://linkedin.com/in/nic01asFr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
              </SocialIconLink>
            </SocialIconsContainer>
            <PDFDownloadLink document={<CVPdf />} fileName="nicolas_laval_cv.pdf">
              {({ blob, url, loading, error }) =>
                loading ? 'Chargement du document...' : (
                  <DownloadButton>
                    Télécharger CV (PDF)
                  </DownloadButton>
                )
              }
            </PDFDownloadLink>
          </ContactInfo>
        </div>
      </ContactSection>
    </Parallax>
  );
}

export default Contact;