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

	:not(:last-child){
		padding: 10rem 6rem 2rem 6rem;
	};
`;

const Container = styled.div`
	padding: 3rem;
	max-width: 100rem;
	background-color: ${color_grey_8};
	box-shadow: 0 2rem 3rem rgba(0,0,0,.2);
	border-radius: 2px;
`;

//------------------------------------------------------------------------------

const StyledSection = ({ children, className, dark, title }) => {
	return(
		<Section className={className} dark={dark}>
			<Title>{title}</Title>
			<Container>
				{children}
			</Container>
		</Section>
	)
}

export default StyledSection;