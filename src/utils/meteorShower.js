import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

const default_meteors = 5;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const meteor1Animation = keyframes`
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

const Meteor = styled.i`
	position: fixed;
	width: ${() => `calc(${getRandomInt(2, 6)}px)`};
	z-index: -99;
	height: 90rem;
  	animation-name: ${() => meteor1Animation};
	animation-delay: ${() => `${getRandomInt(0, 20)}s`};
	animation-duration: ${() => `${getRandomInt(10, 25)}s`};
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
	background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #fff 80%);
	opacity: 0;
`;

const MeteorWrapper = styled.div`
  position: fixed;
  left: ${() => `calc(${getRandomInt(20, 80)}%)`};
  top: ${() => `calc(${getRandomInt(10, 90)}%)`};
  transform: rotate(220deg);
`;

export const MeteorComponent = (props) => {
	const num = (props.num > 0 ? props.num : default_meteors);
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