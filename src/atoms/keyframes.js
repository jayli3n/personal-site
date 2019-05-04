import styled, {keyframes} from 'styled-components';

export const pulseEffect = keyframes`
	50% {
		opacity: 1;
	}
	70% {
		opacity: 0;
	}
	90% {
		opacity: 1;
	}
`;