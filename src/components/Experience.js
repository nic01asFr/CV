import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import experienceData from './experienceData.json';


const ExperienceSection = styled.section`
  transform: translateY(0%);
  position: relative;
  padding: 4.7rem 0;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 4rem;
  padding: 0rem 0;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const TimelineSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotateZ(180deg) translateY(-1%);
  width: 100px;
  height: 100%;
  filter: blur(0.5px);
  padding-top: 2rem;
  z-index: 10;
  @media (max-width: 768px) {
    left: 5%;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  opacity: 0;
  transform: translateY(0rem);
  transition: opacity 0.5s ease, transform 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &.left {
    left: 0;
    padding: 5rem 2rem ;

  };

  

  &.right {
    left: 50%;
    padding: 5rem 2rem ;
  };

  &.visible {
    opacity: 1;
    transform: translateY(0);
  };

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 1rem;
    height: 1rem;
    background-color: var(--primary-color);
    border-radius: 50%;
  };

  &.left::after {
    right: -0.5rem;
  };

  &.right::after {
    left: -0.5rem;
  };
  @media (max-width: 768px) {
  width: 100%;
  align-items: flex-start;
  padding: 2rem 0.2rem 2rem 2.1rem;
    &.left {
  padding: 2rem 0.2rem 2rem 2.1rem;
    width: 100%;
  };
  &.right {
    left: 0;
      width: 100%;
  padding: 1.5rem 0.2rem 1.5rem 2.1rem;
  };
}
`;

const TimelineContent = styled.div`
  width: fit-content;
  height: auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  padding: 1rem;

    &.right{
  align-items: flex-end;
  text-align: end;
  }
    &.left{
  align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;

    &.right {
        width: 100%;
      align-items: flex-start;
      text-align: start;
    }
          &.left{
    width: 100%;
  }
}
`;

const ChildItem = styled.div`
  margin-top: 15px;
  padding-left: 15px;
  border-left: 2px solid var(--secondary-color);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  &.right{
    align-items: flex-end;
    text-align: end;
    padding-left: 0px;
    padding-right: 15px;
    border-left: 0px solid var(--secondary-color);
    border-right: 2px solid var(--secondary-color);

    }
      &.left{
    align-items: flex-start;
    }
          @media (max-width: 768px) {
  width: 100%;
  margin-top: 1em;

  &.right {
  text-align: start;
  margin-top: 1em;
  padding-left: 15px;
  padding-right: 0px;
  border-left: 2px solid var(--secondary-color);
  border-right: 0px solid var(--secondary-color);
  justify-content: flex-start;
  align-items: flex-start;
    }
}
  `;

const formatDate = (dateString) => {
  if (!dateString) return '';
  if (dateString === 'Présent') return 'Août 2024';

  const [month, year] = dateString.split('/');
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  return `${months[parseInt(month) - 1]} ${year}`;
};

const ExperienceTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);
  const svgRef = useRef(null);
  const sectionRef = useRef(null);
  const parallax = useParallax({
    translateY: ['-100px', '100px'],
    startScroll: 0,
    endScroll: 1000
  });

  const createSinePath = (height) => {
    const amplitude = 20; // Ajustez pour plus ou moins de courbure
    const frequency = 0.01; // Ajustez pour plus ou moins d'ondulations
    let d = `M50 0`; // Commencez au milieu en haut
    for (let y = 0; y <= height; y += 10) {
      const x = 50 + Math.sin(y * frequency) * amplitude;
      d += ` L${x} ${y}`;
    }
    return d;
  };

  const updateSVGPath = useCallback(() => {
    if (svgRef.current && timelineRef.current) {
      const containerHeight = timelineRef.current.offsetHeight;
      const path = svgRef.current.querySelector('path');
      const sinePath = createSinePath(containerHeight);
      path.setAttribute('d', sinePath);
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
    }
  }, []);

  const animateSVGPath = useCallback(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path');
      const length = path.getTotalLength();
      /*const sectionRect = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, 1 - sectionRect.top / window.innerHeight));
      const newOffset = length * (1 - scrollPercentage);
      path.style.strokeDashoffset = newOffset;*/

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      const drawLength = length * ( scrollPercentage);
      path.style.strokeDashoffset = drawLength;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => Array.from(new Set([...prev, index])));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    updateSVGPath();
    window.addEventListener('resize', updateSVGPath);
    window.addEventListener('scroll', animateSVGPath);

    return () => {
      items.forEach((item) => observer.unobserve(item));
      window.removeEventListener('resize', updateSVGPath);
      window.removeEventListener('scroll', animateSVGPath);
    };
  }, [updateSVGPath, animateSVGPath]);

  return (
    <div ref={parallax.ref}>
      <ExperienceSection id="experience" className="experience-section" ref={sectionRef}>
        <TimelineContainer ref={timelineRef}>
          <TimelineSVG ref={svgRef}>
            <path
              stroke="var(--background-color)"
              strokeWidth="4"
              fill="none"
            />
          </TimelineSVG>
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
            >
              <Parallax translateY={[20, -20]} opacity={[0.5, 1]} startScroll={0} endScroll={500}>

                <TimelineContent
                  className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <h3>{exp.society}</h3>
                  {exp.children.length > 1 && (
                    <p>{`${formatDate(exp.start || exp.children[0].start)} - ${formatDate(exp.end || exp.children[0].end || 'Présent')}`}</p>
                  )}
                  <p>{exp.description}</p>
                  {exp.children.map((child, childIndex) => (
                    <ChildItem 
                      className={`timeline-childItem ${index % 2 === 0 ? 'left' : 'right'}`}
                      key={childIndex}
                    >
                      <h4>{child.poste}</h4>
                      {exp.children.length === 1 && (
                        <p>{`${formatDate(child.start)} - ${formatDate(child.end || 'Présent')}`}</p>
                      )}
                      <p>{child.description}</p>
                    </ChildItem>
                  ))}
                </TimelineContent>
              </Parallax>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ExperienceSection>
    </div>
  );
};

export default ExperienceTimeline;