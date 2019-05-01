import styled from 'styled-components';
import {
	color_grey_1,
	color_grey_7,
	color_grey_8
} from './variables';


export const H1 = styled.h1`
	font-size: 3.4rem;
	font-weight: 400;
	color: ${color_grey_1};
`;

export const H2 = styled.h1`
	font-size: 2.8rem;
	font-weight: 400;
`;

export const H3 = styled.h1`
	font-size: 2.4rem;
	font-weight: 300;
`;

export const H4 = styled.h1`
	font-size: 2rem;
	font-weight: 300;
`;

export const P = styled.p`
	font-size: 1.8rem;
	font-weight: 300;
`;

export const Title = styled(H1)`
	margin-bottom: 3rem;
`;