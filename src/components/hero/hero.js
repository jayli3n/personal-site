import React from 'react';
import {
	color_hero_1,
	color_hero_2
} from '../../base/variables'
import {
	H1,
	P
} from '../../base/base'
import styled from 'styled-components';
import avatar from '../../images/avatar.jpg';

const Section = styled.section`
	min-height: 100vh;
	background-image: linear-gradient(to bottom, ${color_hero_1}, ${color_hero_2});
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
	border-radius: 4px;
	margin-bottom: 2rem;
	box-shadow: 0 2rem 4rem rgba(0,0,0,.3);
`;

const Name = styled(H1)`
	color: #fff;
	margin-bottom: 1.3rem;
	box-shadow: 0 2rem 4rem rgba(0,0,0,.3);
`;

const Status = styled(P)`
	color: #fff;
	box-shadow: 0 2rem 4rem rgba(0,0,0,.3);
`;


const Hero = () => {
	return(
		<Section>
			<InfoBox>
				<Avatar></Avatar>
				<Name>Jay Li</Name>
				<Status>&lt; Full-Stack Web Developer &#47;&gt;</Status>
			</InfoBox>
		</Section>
	)
}

export default Hero;