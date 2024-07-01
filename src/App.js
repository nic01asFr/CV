import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SkillsProvider } from './components/SkillsContext';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <SkillsProvider>
      <ParallaxProvider>
        <div className="App">
          <Skills />
          <Footer />
          <main>
            <Contact />
            <Experience />
            <Home />
          </main>
          <Header />
        </div>
      </ParallaxProvider>
    </SkillsProvider>
  );
}

export default App;