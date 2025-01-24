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

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ParallaxContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <ParallaxProvider>
      <HomeSection id="accueil">
        <ParallaxContent>
          <Parallax translateY={['0%', '150%']} startScroll={100} endScroll={0}>
            <h1>Nicolas LAVAL</h1>
          </Parallax>
          <Parallax translateY={['0%', '200%']} startScroll={100} endScroll={0}>
            <h2>Technicien Méthodes et Innovation</h2>
          </Parallax>
          <Parallax translateY={['0%', '350%']} startScroll={100} endScroll={0}>
            <p>
              Compétent en méthodes et optimisation des processus, avec une forte orientation vers l'innovation et les nouvelles technologies. 
              Expérience confirmée en gestion de maintenance et amélioration continue. 
              Passionné par l'industrie du futur, l'automatisation et les solutions connectées.
            </p>
          </Parallax>
        </ParallaxContent>
      </HomeSection>
    </ParallaxProvider>
  );
}


export default Home;
