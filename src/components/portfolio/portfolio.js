import React from 'react';
import styled from 'styled-components';
import {
	H2,
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_grey_3,
	color_grey_4,
	color_grey_6,
	color_grey_7,
	color_primary,
	color_primary_light
} from '../../atoms/variables';
import {Container} from '../../atoms/container';
import {pulseEffect} from '../../atoms/keyframes';
import { ReactComponent as Github } from '../../images/icons/github.svg';
import { ReactComponent as ArrowBack } from '../../images/icons/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../images/icons/arrow_forward.svg';

import test from '../../images/portfolio/test.jpg';


const portfolio_array = [
	{
		imgPath: test,
		title: 'Trillo Front End',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Facial Recognition Web App',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: test,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	}
];


const Wrapper = styled.div`
	max-width: 97rem;
	position: relative;
	display: flex;
	padding-bottom: 2rem;
	overflow: auto hidden;
`;

const Card = styled.div`
	display: block;
	height: 45rem;
	max-width: 31rem;
	background-color: #fff;
	box-shadow: none;
	border: 1px solid ${color_grey_6};
	border-radius: 8px;

	:not(:last-child){
		margin-right: 2rem;
	};
`;

const Image = styled.div`
	width: 100%;
	height: 45%;
	display: flex;
	justify-content: center;
	overflow: hidden;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	img{
		height: 100%;
		width: auto;
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 1.8rem 1.6rem;	
`;

const StyledH4 = styled(H4)`
	margin-bottom: 1rem;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-top: auto;
	padding: 1.8rem 1.6rem;
`;

const Button = styled.a`
	display: flex;
	align-items: center;

	font-size: 1.4rem;
	text-decoration: none;
	padding: .5rem 1rem;
	border-radius: 4px;
	color: #fff;
	background-color: ${props => props.secondary ? color_grey_4 : color_primary_light};

	& > * {
		animation: ${props => props.pulsate ? pulseEffect : 'none'} 3s infinite;
	}

	:not(:last-child){
		margin-right: .5rem;
	};

	:active{
		background-color: ${props => props.secondary ? color_grey_3 : color_primary};
		color: ${color_grey_6};
	};
	
	:active #live{
		background-color: ${color_grey_6};
	}

	:active #github{
		fill: ${color_grey_6};
	}
`;

const Icon = styled.div`
	fill: #fff;
	height: 1.5rem;
	width: 1.5rem;
	margin-right: .5rem;
`;

const WhiteDot = styled.div`
	height: .75rem;
	width: .75rem;
	border-radius: 50%;
	background-color: #fff;
	margin-right: .5rem;
	opacity: 1;
`;

const SliderButton = styled.div`
	margin: auto 0;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	bottom: 0;
	left: ${props => props.direction=='left' ? 0 : 'auto'};
	right: ${props => props.direction=='right' ? 0 : 'auto'};
	transform: translateX(${props => props.direction=='right' ? '50%' : props.direction=='left' ? '-50%' : 0});
	z-index: 99;
	background-color: #fff;
	box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 4px 8px 0 rgba(0,0,0,0.20);
	border-radius: 50%;
	cursor: pointer;
	visibility: visible;
	height: 4.3rem;
	width: 4.3rem;
	opacity: .9;

	:hover{
		opacity: 1;
		box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 5px 9px 0 rgba(0,0,0,0.20);
	};

	:active{
		opacity: .9;
		box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 4px 8px 0 rgba(0,0,0,0.20);
	};
`;

const SliderIcon = styled.div`
	fill: ${color_grey_2};
	height: 2.5rem;
	width: 2.5rem;
`;


const DetailsComponent = ({className, title, text}) => {
	return(
		<div className={className}>
			<Details>
				<StyledH4>{title}</StyledH4>
				<P>{text}</P>
			</Details>
		</div>
	)
}

const ButtonsComponent = ({className, liveLink, sourceLink}) => {
	return(
		<Buttons className={className}>
			<Button href={liveLink} target='_blank' pulsate>
				<WhiteDot id='live'/><span>Live</span>
			</Button>
			<Button href={sourceLink} target='_blank' secondary>
				<Icon id='github'><Github/></Icon><span>Source</span>
			</Button>
		</Buttons>
	)
}

const CardComponent = ({className, p_array}) => (
	<Wrapper className={className}>
			{p_array.map(({imgPath, title, text, liveLink, sourceLink}, i) => (
				<Card key={i}>
					<Image><img src={imgPath}/></Image>
					<DetailsComponent title={title} text={text}/>
					<ButtonsComponent liveLink={liveLink} sourceLink={sourceLink}/>
				</Card>
			))}
	</Wrapper>
)

const SliderButtonComponent = ({className, direction}) => {
	return(
		<SliderButton className={className} direction={direction}>
			<SliderIcon>
				{direction=='right' ? <ArrowForward/> : direction=='left' ? <ArrowBack/> : <span/>}
			</SliderIcon>
		</SliderButton>
	)
}

//------------------------------------------------------------------------------

const Portfolio = () => {
	return(
		<Container title='Portfolio' transparent>
			<SliderButtonComponent direction='left'/>
			<CardComponent p_array={portfolio_array}/>
			<SliderButtonComponent direction='right'/>
		</Container>
	)
}

export default Portfolio;