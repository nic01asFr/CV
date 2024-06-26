import React, { useEffect, useRef, useState } from 'react';
import Vivus from 'vivus';
import styled from 'styled-components';

const CloudContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const CloudSVG = styled.svg`
  stroke: white;
  stroke-width: 4rem;
  width: 100%;
  height: 100%;
  top: -50%;
  transform: scale(0.9, -0.9); 

`;

const CloudAnimation = () => {
  const svgRef = useRef(null);
  const vivusRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (svgRef.current) {
      vivusRef.current = new Vivus(svgRef.current, {
        duration: 300,
        start: 'manual',
        type: 'oneByOne'
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      if (isVisible && containerRef.current && vivusRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculer le pourcentage de la section visible
        let visiblePercentage;
        if (rect.top >= 0) {
          visiblePercentage = Math.min(1, (windowHeight - rect.top) / rect.height);
        } else {
          visiblePercentage = Math.min(1, (rect.bottom) / rect.height);
        }

        // Mettre à jour la progression de l'animation
        vivusRef.current.setFrameProgress(visiblePercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour configurer l'animation

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <CloudContainer ref={containerRef}>
      <CloudSVG
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21300 9023"
        fill="none" 
        stroke="--background-color"
        strokeWidth="8"
      >
        <path d="M10550 7913 c-518 -49 -885 -176 -1285 -444 -316 -211 -606 -526 -800 -869 -96 -168 -161 -324 -237 -560 -22 -69 -43 -128 -46 -131 -4 -4 -59 0 -122 8 -63 8 -176 15 -250 15 -440 3 -858 -226 -1103 -605 -21 -32 -60 -104 -88 -158 -27 -55 -56 -102 -63 -105 -8 -3 -72 2 -143 10 -204 25 -315 19 -486 -25 -576 -150 -956 -725 -862 -1307 82 -502 469 -892 970 -978 131 -22 312 -15 494 20 73 14 141 26 150 26 13 0 25 -30 55 -137 66 -246 142 -407 267 -563 194 -243 415 -385 725 -462 118 -29 143 -32 289 -32 133 -1 178 3 265 23 197 45 333 106 538 243 73 49 137 88 141 86 5 -2 58 -64 119 -139 337 -415 727 -650 1222 -736 80 -14 154 -18 310 -17 191 0 215 3 357 33 226 48 476 147 650 258 157 99 369 299 495 463 87 115 155 229 245 417 42 87 77 160 79 162 1 1 63 -31 136 -72 187 -105 230 -125 341 -163 163 -55 244 -68 422 -69 171 0 252 12 402 61 305 98 580 325 735 608 84 151 125 280 174 551 15 83 30 154 34 158 4 4 85 -23 181 -61 267 -106 414 -135 574 -113 378 53 671 298 787 659 30 92 32 105 32 262 0 160 -1 168 -33 264 -121 365 -410 604 -792 656 -95 13 -181 6 -369 -30 -145 -28 -147 -28 -159 18 -81 307 -104 373 -184 514 -180 318 -477 540 -842 630 -118 29 -145 32 -285 32 -142 0 -297 -18 -428 -51 -20 -5 -28 6 -82 119 -151 319 -317 557 -548 786 -265 263 -545 442 -902 577 -341 129 -779 197 -1080 168z" />
      </CloudSVG>
    </CloudContainer>
  );
};

export default CloudAnimation;