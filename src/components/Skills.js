import React, { useEffect, useRef, useContext } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import styled from 'styled-components';
import { SkillsContext } from './SkillsContext';

const SkillsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  color: var(--primary-color);
  background: transparent;
`;

const cloudPath = "M7250 8913 c-518 -49 -885 -176 -1285 -444 -316 -211 -606 -526 -800 -869 -96 -168 -161 -324 -237 -560 -22 -69 -43 -128 -46 -131 -4 -4 -59 0 -122 8 -63 8 -176 15 -250 15 -440 3 -858 -226 -1103 -605 -21 -32 -60 -104 -88 -158 -27 -55 -56 -102 -63 -105 -8 -3 -72 2 -143 10 -204 25 -315 19 -486 -25 -576 -150 -956 -725 -862 -1307 82 -502 469 -892 970 -978 131 -22 312 -15 494 20 73 14 141 26 150 26 13 0 25 -30 55 -137 66 -246 142 -407 267 -563 194 -243 415 -385 725 -462 118 -29 143 -32 289 -32 133 -1 178 3 265 23 197 45 333 106 538 243 73 49 137 88 141 86 5 -2 58 -64 119 -139 337 -415 727 -650 1222 -736 80 -14 154 -18 310 -17 191 0 215 3 357 33 226 48 476 147 650 258 157 99 369 299 495 463 87 115 155 229 245 417 42 87 77 160 79 162 1 1 63 -31 136 -72 187 -105 230 -125 341 -163 163 -55 244 -68 422 -69 171 0 252 12 402 61 305 98 580 325 735 608 84 151 125 280 174 551 15 83 30 154 34 158 4 4 85 -23 181 -61 267 -106 414 -135 574 -113 378 53 671 298 787 659 30 92 32 105 32 262 0 160 -1 168 -33 264 -121 365 -410 604 -792 656 -95 13 -181 6 -369 -30 -145 -28 -147 -28 -159 18 -81 307 -104 373 -184 514 -180 318 -477 540 -842 630 -118 29 -145 32 -285 32 -142 0 -297 -18 -428 -51 -20 -5 -28 6 -82 119 -151 319 -317 557 -548 786 -265 263 -545 442 -902 577 -341 129 -779 197 -1080 168z";

function Skills() {
  const mountRef = useRef(null);
  const cloudsRef = useRef([]);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  const { selectedSkills } = useContext(SkillsContext);

  useEffect(() => {
    const skills = ["HTML", "CSS","JS", "React", "LeafLet", "GIT", "Python", "NumPy", "Pandas", "TensorFlow", "Blender", "Gimp"];
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 20;

    const loader = new SVGLoader();
    const paths = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${cloudPath}"/></svg>`).paths;

    const backgroundColorRaw = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
    const backgroundColorRGB = new THREE.Color(backgroundColorRaw);

    const createCloud = (skill, depth) => {
      const group = new THREE.Group();

      const baseScale = 0.0008;
      const minScale = 0.5;
      const scaleMultiplier = minScale + (1 - minScale) * Math.pow(depth, 2);
      const scale = baseScale * scaleMultiplier;
      const shape = paths[0].toShapes(true)[0];
      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshBasicMaterial({
        color: backgroundColorRGB,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);      
      mesh.scale.set(scale, scale, scale);
    
      group.add(mesh);

      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      const fontSize = Math.max(32, Math.floor(72 * scaleMultiplier));
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
      context.font = `bold ${fontSize}px Arial`;
      // Render opaque text
      context.fillStyle = 'transparent';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(skill, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      
      // Assurez-vous que la texture utilise le bon mode de transparence
      texture.premultiplyAlpha = false;
      
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1,
        blending: THREE.NoBlending, // Changer le mode de fusion
        depthTest: false, // Désactiver le test de profondeur
        depthWrite: false // Désactiver l'écriture de profondeur
      });
      
      const sprite = new THREE.Sprite(spriteMaterial);
      const textScale = 10 * scale / baseScale;
      sprite.scale.set(textScale, textScale * 0.5, 1);
      sprite.renderOrder = 1; // Assurer que le texte est rendu en dernier


      const box = new THREE.Box3().setFromObject(mesh);
      const cloudCenter = new THREE.Vector3();
      box.getCenter(cloudCenter);

      sprite.position.set(cloudCenter.x, cloudCenter.y, 0.5);
      group.add(sprite);

      const width = box.max.x - box.min.x;
      group.position.set(
        width / 2 + window.innerWidth / 2,
        Math.random() * 30 - 15,
        depth * 10 - 5
      );

      scene.add(group);
      return {
        group,
        speed: 0.01 + (1 - depth) * 0.05,
        depth,
        width,
        skill
      };
    };

    const addNewCloud = () => {
      if (cloudsRef.current.length < 20) {
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        const depth = Math.random();
        const newCloud = createCloud(randomSkill, depth);
        cloudsRef.current.push(newCloud);
      }
    };

    // Initial cloud creation
    for (let i = 0; i < 15; i++) {
      addNewCloud();
    }

    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update scroll speed
      const currentScrollY = window.scrollY;
      scrollSpeed = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      cloudsRef.current.forEach((cloud) => {
        cloud.group.position.x += cloud.speed * (1 - (1 - cloud.depth*1.2));

        // Check if the right edge of the cloud has reached the right edge of the canvas
        if (cloud.group.position.x > cloud.width * 9) {
          // Reposition the cloud to the left
          cloud.group.position.x = -cloud.width * 9;
          cloud.group.position.y = Math.random() * 30 - 15;
        }

        // Adjust vertical position based on scrolling
        cloud.group.position.y += scrollSpeed * 0.03 * (1 - cloud.depth);

        // Highlight selected skills
        if (selectedSkills.includes(cloud.skill)) {
          cloud.group.children[1].material.opacity = 1; // Full opacity for selected skills
        } else {
          cloud.group.children[1].material.opacity = 0.7; // Slightly lower opacity for non-selected skills
        }
      });
      renderer.setClearColor(0x000000, 0); // Définir la couleur d'effacement sur transparent
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };


  }, [selectedSkills]);

  return <SkillsContainer ref={mountRef} />;
}

export default Skills;