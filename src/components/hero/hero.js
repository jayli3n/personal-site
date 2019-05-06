import React from 'react';
import {
	color_hero_1,
	color_hero_2,
	color_grey_4,
	color_grey_5
} from '../../atoms/variables';
import {
	H1,
	H4
} from '../../atoms/typography';
import {Button as ButtonAtom} from '../../atoms/button';
import styled from 'styled-components';
import avatar from '../../images/avatar.jpg';
import { ReactComponent as Github } from '../../images/icons/github.svg';
import { ReactComponent as Linkedin } from '../../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';


const StyledSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10rem 6rem;
	min-height: 100vh;
	background-color: transparent;
`;

const InfoBox = styled.div`
	text-align: center;
`;

const Avatar = styled.div`
	display: inline-block;
	background-image: url('${avatar}');
	background-position: center;
	background-size: cover;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	margin-bottom: 2rem;
`;

const Name = styled(H1)`
	color: #fff;
	margin-bottom: 1.3rem;
`;

const Status = styled(H4)`
	font-weight: 300;
	color: #fff;
`;

const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 2rem;
	width: auto;
`;

const Button = styled(ButtonAtom)`
	color: #fff;
	font-size: 1.6rem;

	:not(:last-child){
		margin-right: 2rem;
	};
`;

const Socials = styled.div`
	display: flex;
	margin-top: 1.8rem;
	justify-content: center;
`;

const SocialIcon = styled.div`
	fill: ${color_grey_5};
	height: 2.5rem;
	width: 2.5rem;
	cursor: pointer;
	transition: all .2s;

	:not(:last-child){
		margin-right: 2rem;
	};

	:hover{
		fill: #fff;
	;

	:active{
		fill: ${color_grey_4};
	;
`;

//------------------------------------------------------------------------------

const Hero = () => {
	return(
		<StyledSection>
			<InfoBox>
				<Avatar/>
				<Name>Jay Li</Name>
				<Status>&lt; Full-Stack Web Developer &#47;&gt;</Status>
				<Buttons>
					<Button link='#' ww='15rem'>Contact Me</Button>
					<Button link='#' ww='15rem' secondary>Resume</Button>
				</Buttons>

				<Socials>
					<SocialIcon><Github /></SocialIcon>
					<SocialIcon><Linkedin /></SocialIcon>
					<SocialIcon><Twitter /></SocialIcon>
				</Socials>
			</InfoBox>
		</StyledSection>
	)
}

export default Hero;