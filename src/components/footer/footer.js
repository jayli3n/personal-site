import React from 'react';
import styled from 'styled-components';
import {
	H1,
	H4,
	P
} from '../../atoms/typography';
import {
	color_hero_1,
	color_hero_2,
	color_grey_2,
	color_grey_3,
	color_grey_4,
	color_grey_5,
	color_primary_light
} from '../../atoms/variables';

import placeholder from '../../images/portfolio/facial_recog.jpg';
import { ReactComponent as Github } from '../../images/icons/github.svg';
import { ReactComponent as Linkedin } from '../../images/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';


const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,.3);
	padding: 8rem 6rem 7rem 6rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Title = styled(H1)`
	margin-bottom: 3rem;
	color: #fff;
`;

const Content = styled(P)`
	margin-bottom: 3rem;
	opacity: .8;
	color: #fff;
`;

const Copyright = styled(P)`
	font-size: 1.4rem;
	color: ${color_grey_4};
`
const AdditionalText = styled(P)`
	font-size: 1.4rem;
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 2rem 2.5rem;
	text-align: right;
	color: ${color_grey_3};
`

const A = styled.a`
	:link,
	:visited{
		color: ${color_primary_light};
		text-decoration: none;
	};

	:hover{
		text-decoration: underline;
	};
`;

const Socials = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem;
`;

const SocialIcon = styled.a`
	height: 2rem;
	width: 2rem;
	cursor: pointer;
	transition: all .2s;
	fill: ${color_grey_4};

	:not(:last-child){
		margin-right: 2rem;
	};

	:hover{
		fill: #fff;
	;

	:active{
		fill: ${color_grey_3};
	;
`;

//------------------------------------------------------------------------------

const Footer = () => {
	return(
		<Container>
			<Wrapper>
				<Title>Let's get in touch!</Title>
				<Content>I'm always open to make new friends.<br/>
					Shoot me an email at: <A href = "mailto: jay.li23697@gmail.com">jay.li23697@gmail.com</A></Content>
				<Copyright>&copy; 2019 - Copyright Jay Li, All Rights Reserved.</Copyright>
				<Socials>
					<SocialIcon href='https://github.com/jayli3' target='_blank'><Github /></SocialIcon>
					<SocialIcon href='https://github.com/jayli3' target='_blank'><Linkedin /></SocialIcon>
					<SocialIcon href='https://github.com/jayli3' target='_blank'><Twitter /></SocialIcon>
				</Socials>
			</Wrapper>
			<AdditionalText>Designed & developed by me from scratch.<br/>
				Source code for the site can be found <A href='https://github.com/jayli3/personal-site' target='_blank'>here</A>.
			</AdditionalText>
		</Container>
	)
}

export default Footer;