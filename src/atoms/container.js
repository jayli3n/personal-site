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
	background-color: ${color_grey_7};
	padding: 10rem 6rem;
	margin: 0 auto;

	:not(:last-child){
		padding-bottom: 2rem;
	};
`;

const Div = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	padding: ${props => props.transparent ? `none` : `3rem`};
	max-width: 100rem;
	background-color: ${props => props.transparent ? `transparent` : `#fff`};
	box-shadow: ${props => props.transparent ? `none` : `0 .1rem .15rem rgba(0,0,0,.3)`};
	border-radius: 3px;
`;

//------------------------------------------------------------------------------

export const Container = ({ children, className, transparent, title }) => {
	return(
		<Section className={className}>
			<Title>{title}</Title>
			<Div transparent={transparent}>
				{children}
			</Div>
		</Section>
	)
}