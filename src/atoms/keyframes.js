import { keyframes } from 'styled-components';


export const PULSE_EFFECT = keyframes`
	50% { opacity: 1; }
	70% { opacity: 0; }
	90% { opacity: 1; }
`;

// Nav slides from top into view
export const NAV_REVEAL = keyframes`
	0% { top: -10rem; opacity: 0; }
	50% { opacity: 0; }
	100% { top: 0; opacity: 1; }
`;
