import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';

const HomeSection = styled.section`
  background: linear-gradient(var(--primary-color) 55%, var(--background-color)), url('https://source.unsplash.com/random/1600x900') center/cover no-repeat;
  color: var(--light-text-color);
  overflow: hidden;
  position: relative;
  text-align: center;
  height: 100vh;
  padding: 2.7rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: var(--light-text-color);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--light-text-color);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

function Home() {
  return (
    <ParallaxProvider>
      <HomeSection id="accueil">
        <div className="container">
          <Parallax translateY={[100, -220]} opacity={[0, 1]} speed={-1}>
            <h1>Nicolas LAVAL</h1>
          </Parallax>
          <Parallax translateY={[20, -400]} pacity={[0, 1]} speed={-2}>
            <h2>Apprenti développeur Web</h2>
          </Parallax>
          <Parallax translateY={[200, -500]} pacity={[0, 1]} speed={-2}>
            <p>Bienvenue sur mon CV en ligne. Pour commencer, allez vers le haut ! Mon parcours est présenté de manière chronologique, en mettant en avant les compétences clés issues de chaque expérience scolaire comme professionnelle</p>
          </Parallax>
        </div>
      </HomeSection>
    </ParallaxProvider>
  );
}

export default Home;