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
          <Parallax translateY={['0%', '450%']} startScroll={100} endScroll={0}>
            <h1>Nicolas LAVAL</h1>
          </Parallax>
          <Parallax translateY={['0%', '200%']} startScroll={100} endScroll={0}>
            <h2>Apprenti développeur Web</h2>
          </Parallax>
          <Parallax translateY={['0%', '350%']} startScroll={100} endScroll={0}>
            <p>
              Bienvenue sur mon CV en ligne ! Fort d'un parcours atypique, j'ai toujours cherché à résoudre des problèmes techniques en utilisant les outils informatiques adaptés. Aujourd'hui, je souhaite me professionnaliser dans le développement web pour apporter des solutions innovantes aux entreprises. Découvrez mon parcours unique en remontant cette page, où chaque expérience met en lumière les compétences clés que j'ai acquises, tant dans ma vie professionnelle que scolaire.
            </p>
          </Parallax>
        </ParallaxContent>
      </HomeSection>
    </ParallaxProvider>
  );
}

export default Home;