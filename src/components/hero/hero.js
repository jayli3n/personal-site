import React from 'react';
import {
	color_hero_1,
	color_hero_2
} from '../../atoms/variables'
import {
	H1,
	P
} from '../../base/base'
import styled from 'styled-components';
import avatar from '../../images/avatar.jpg';
import ButtonAtom from '../../atoms/buttonAtom'

const Section = styled.section`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const InfoBox = styled.div`
	text-align: center;
`;

const Avatar = styled.div`
	display: inline-block;
	background-image: url('${avatar}');
	background-size: cover;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	margin-bottom: 2rem;
	box-shadow: 0 2rem 4rem rgba(0,0,0,.3);
`;

const Name = styled(H1)`
	color: #fff;
	margin-bottom: 1.3rem;
`;

const Status = styled(P)`
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


const Hero = () => {
	return(
		<Section>
			<InfoBox>
				<Avatar></Avatar>
				<Name>Jay Li</Name>
				<Status>&lt; Full-Stack Web Developer &#47;&gt;</Status>
				<Buttons>
					<Button href='#'>Contact Me</Button>
					<Button href='#' secondary>Resume</Button>
				</Buttons>
			</InfoBox>
		</Section>
	)
}

export default Hero;