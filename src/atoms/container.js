import React from 'react';
import styled from 'styled-components';
import {
	color_grey_6,
	color_grey_7,
	color_grey_8,
	min_width,
	max_width
} from './variables';
import {Title} from './typography';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${color_grey_7};
	padding: 10rem 6rem 2rem 6rem;
	margin: 0 auto;

	:nth-last-of-type(2){
		padding-bottom: 10rem;
	};
`;

const Div = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	padding: ${props => props.transparent ? `none` : `3rem`};
	min-width: ${min_width};
	max-width: ${max_width};
	width: 100%;
	background-color: ${props => props.transparent ? `transparent` : `#fff`};
	box-shadow: ${props => props.transparent ? `none` : `0 0 0 0.5px rgba(50,50,93,.12), 0 2px 5px 0 rgba(50,50,93,.07), 0 3px 9px 0 rgba(50,50,93,.03), 0 1px 1.5px 0 rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.03)`};
	border-radius: 3px;

	:hover{
		box-shadow: ${props => props.transparent ? `none` : `0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.12), 0 3px 9px 0 rgba(50,50,93,.08), 0 1px 1.5px 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.08)`};
	};
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