import React from 'react';
import styled, { keyframes } from 'styled-components';

// number of meteors to display if it's not specified
const DEFAULT_METEORS = 5;

// random whole number generator
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// animation for the each meteor
const meteorAnimation = keyframes`
  from {
    transform: scale(0);
  }

  1% {
    opacity: ${(getRandomInt(50, 100)) * 0.01};
  }

  6% {
    opacity: 0;
    height: 0;
  }

  7% {
    transform: scale(1);
  }

  to {
    opacity: 0;
  }
`;

// the meteor, each meteor will have different width, animation duration and delay
const Meteor = styled.i`
	position: fixed;
	width: ${() => `calc(${getRandomInt(2, 6)}px)`};
	height: 90rem;
  animation-name: ${() => meteorAnimation};
	animation-delay: ${() => `${getRandomInt(0, 20)}s`};
	animation-duration: ${() => `${getRandomInt(10, 25)}s`};
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
	background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #fff 80%);
	opacity: 0;
`;

// div wrapper for meteor, spawns at random location on screen and goes diagonal down
const MeteorWrapper = styled.div`
  position: fixed;
  left: ${() => `calc(${getRandomInt(20, 80)}%)`};
  top: ${() => `calc(${getRandomInt(10, 90)}%)`};
  z-index: -99;
  transform: rotate(220deg);
`;

// constructs specified number of meteors
export const MeteorComponent = (props) => {
	const num = (props.num > 0 ? props.num : DEFAULT_METEORS);
	return(
		<>
			{[...Array(num)].map((_, i) => {
				return(
					<MeteorWrapper key={i}>
						<Meteor />
					</MeteorWrapper>
				)
			})}
		</>
	)

}