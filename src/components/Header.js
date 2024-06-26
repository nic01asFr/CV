import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: transparent;
  color: var(--light-text-color);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  backdrop-filter: blur(3px); /* Ajout d'un effet de flou */

  border-bottom: 1px solid var(--background-color);
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: var(--light-text-color);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1.1rem;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav className="container">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#experience">Parcours</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;