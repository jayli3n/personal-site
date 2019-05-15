import React from 'react';
import styled from 'styled-components';
import {
	color_primary,
	color_primary_dark,
	color_hero_1,
	color_grey_4
} from './variables'

const A = styled.a`
	:link,
	:visited{
		text-decoration: none;
		padding: 1.5rem 3rem;
		border-radius: 3px;
		border: 2px solid ${props => props.secondary ? '#fff' : 'transparent'};
		border-bottom: 2px solid ${props => props.secondary ? '#fff' : color_primary_dark};
		background-color: ${props => props.secondary ? 'rgba(27,32,35, .6)' : color_primary};
		box-shadow: 0 2rem 4rem rgba(0,0,0,.3);
		cursor: pointer;
		transition: all .2s;
	}

	:hover{
		transform: scale(1.05);
		box-shadow: 0 2rem 5rem rgba(0,0,0,.3);
	}

	:active{
		transform: scale(1);
		background-color: ${props => props.secondary ? 'rgba(27,32,35, .9)' : color_primary_dark};
		border: 2px solid ${props => props.secondary ? `${color_grey_4}` : 'transparent'};
		color: ${color_grey_4};
		box-shadow: 0 2rem 2rem rgba(0,0,0,.4);
	}
`;

export const Button = ({link, children, className, secondary, ww}) => {
	return(
		<A href={link} className={className} secondary={secondary} ww={ww}>
			{children}
		</A>
	)
}