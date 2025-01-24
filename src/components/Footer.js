import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: transparent;
  color: var(--primary-color);
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(3px); /* Ajout d'un effet de flou */

`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <p>&copy; 2025 Nic01asFr Tous droits réservés.</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
