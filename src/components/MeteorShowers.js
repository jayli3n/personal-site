import React from 'react';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-particles-js';
import particlesOptions from '../react-particles-js-config';


// Number of meteors to display if it's not specified
const DEFAULT_METEORS = 5;

// Random whole number generator
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructs specified number of meteors
export const MeteorShowers = (props) => {
  const num = (props.num || DEFAULT_METEORS);
  return (
    <>
      <StyledParticles params={particlesOptions}/>
      <div>
        {[...Array(num)].map((_, i) => (
          <MeteorWrapper key={i}>
            <Meteor />
          </MeteorWrapper>
        ))}
      </div>
      <DarkBGOverlayDiv />
    </>
  )
};

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -99;
  filter: blur(.2px);
  background-color: #121316;
  background-image: linear-gradient(to bottom, #1C1E21, #0B0D0F);
`;

const DarkBGOverlayDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -99;
  background-color: #00000000; // Disabled
`;

// Animation for the each meteor
const meteorAnimation = keyframes`
  from { transform: scale(0); }
  1% { opacity: ${(getRandomInt(50, 100)) * 0.01}; } 
  6% { opacity: 0; height: 0; }
  7% { transform: scale(1); }
  to { opacity: 0; }
`;

// The meteor, each meteor will have different width, animation duration and delay
const Meteor = styled.i`
  position: fixed;
  width: ${() => `calc(${getRandomInt(2, 6)}px)`};
  height: 90rem;
  animation-name: ${() => meteorAnimation};
  animation-delay: ${() => `${getRandomInt(0, 20)}s`};
  animation-duration: ${() => `${getRandomInt(10, 25)}s`};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #FFFFFF 80%);
  opacity: 0;
`;

// Div wrapper for meteor, spawns at random location on screen and goes diagonal down
const MeteorWrapper = styled.div`
  position: fixed;
  left: ${() => `calc(${getRandomInt(20, 80)}%)`};
  top: ${() => `calc(${getRandomInt(10, 90)}%)`};
  z-index: -99;
  transform: rotate(220deg);
`;
