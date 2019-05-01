import React from 'react';
import styled from 'styled-components';
import {
	color_grey_6,
	color_grey_7,
	color_grey_8,
	max_width
} from './variables';
import {Title} from './typography';

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${props => props.dark ? `${color_grey_6}` : `${color_grey_7}`};
	padding: 10rem 6rem;
	margin: 0 auto;

	:not(:last-child){
		padding-bottom: 2rem;
	};
`;

const Container = styled.div`
	padding: ${props => props.transparent ? `none` : `3rem`};
	max-width: 100rem;
	background-color: ${props => props.transparent ? `transparent` : `#fff`};
	box-shadow: ${props => props.transparent ? `none` : `0 .5rem 2rem rgba(0,0,0,.1)`};
	border-radius: 2px;
`;

//------------------------------------------------------------------------------

const StyledSection = ({ children, className, transparent, title }) => {
	return(
		<Section className={className}>
			<Title>{title}</Title>
			<Container transparent={transparent}>
				{children}
			</Container>
		</Section>
	)
}

export default StyledSection;