import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { ReactComponent as Github } from '../images/icons/github.svg';
import { ReactComponent as Linkedin } from '../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../images/icons/twitter.svg';
import { ReactComponent as Medium } from '../images/icons/medium.svg';
import {
	color_grey_4,
	color_grey_5,
} from './variables';

const Wrapper = styled.div`
	display: flex;
	margin-top: ${props => props.isSmall ? '1rem' : '1.8rem'};
	justify-content: center;
`;

const SocialIcon = styled.a`
	fill: ${color_grey_5};
	height: ${props => props.isSmall ? '2rem' : '2.5rem'};
	width: ${props => props.isSmall ? '2rem' : '2.5rem'};
	cursor: pointer;
	transition: all .2s;

	:not(:last-child){
		margin-right: ${props => props.isSmall ? '1rem' : '1.2rem'};
	};

	:hover{
		fill: #fff;
	;

	:active{
		fill: ${color_grey_4};
	;
`;


export const Socials = ({small}) => {

	return(
		<Wrapper isSmall={small}>
			<SocialIcon isSmall={small} href='https://github.com/jayli3n' target='_blank' rel="noopener" onClick={() => {
				ReactGA.event({
		            category: 'Hero',
		            action: 'GitHub icon',
		        });
			}}><Github /></SocialIcon>
			<SocialIcon isSmall={small} href='https://github.com/jayli3n' target='_blank' rel="noopener" onClick={() => {
				ReactGA.event({
		            category: 'Hero',
		            action: 'LinkedIn icon',
		        });
			}}><Linkedin /></SocialIcon>
			<SocialIcon isSmall={small} href='https://medium.com/@jayli3n' target='_blank' rel="noopener" onClick={() => {
				ReactGA.event({
		            category: 'Hero',
		            action: 'Medium icon',
		        });
			}}><Medium /></SocialIcon>
			<SocialIcon isSmall={small} href='https://twitter.com/JayLi08453971' target='_blank' rel="noopener" onClick={() => {
				ReactGA.event({
		            category: 'Hero',
		            action: 'Twitter icon',
		        });
			}}><Twitter /></SocialIcon>
		</Wrapper>
	)
}