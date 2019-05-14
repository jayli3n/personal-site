import React, {Component} from 'react';
import styled from 'styled-components';
import {media} from '../../utils/mediaQueriesBuilder';
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

import jayli3_site_img from '../../images/portfolio/jayli3-site.jpg';
import facial_recognition_img from '../../images/portfolio/facial-recognition-web-app_snapshot.jpg';
import linear_gradient_img from '../../images/portfolio/linear-gradient_snapshot.jpg';
import natours_img from '../../images/portfolio/natours-tour-startup_snapshot.jpg';
import nexter_img from '../../images/portfolio/nexter-real-estate_snapshot.jpg';
import starwars_img from '../../images/portfolio/starwars-api_snapshot.jpg';
import trillo_img from '../../images/portfolio/trillo-hotel-booking_snapshot.jpg';


const portfolio_array = [
	{
		imgPath: trillo_img,
		title: 'Trillo Front End',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/trillo-front-end/',
		sourceLink: 'https://github.com/jayli3/trillo-front-end',
	},
	{
		imgPath: facial_recognition_img,
		title: 'Facial Recognition Web App',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/facial-recognition-web-app/',
		sourceLink: 'https://github.com/jayli3/facial-recognition-web-app',
	},
	{
		imgPath: nexter_img,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/nexter-front-end/',
		sourceLink: 'https://github.com/jayli3/nexter-front-end',
	},
	{
		imgPath: natours_img,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/natours-startup/',
		sourceLink: 'https://github.com/jayli3/natours-startup',
	},
	{
		imgPath: starwars_img,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/starwars/',
		sourceLink: 'https://github.com/jayli3/starwars',
	},
	{
		imgPath: jayli3_site_img,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: 'https://github.com/jayli3/personal-site',
	},
	{
		imgPath: linear_gradient_img,
		title: 'Star Wars API',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: 'https://jayli3.github.io/linear-background-generator/',
		sourceLink: 'https://github.com/jayli3/linear-background-generator',
	}
];


const Wrapper = styled.div`

`;

const Cards = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	overflow: hidden;
	height: ${props => props.isShowAll ? '' : '94rem'};
`;

const Card = styled.div`
	display: block;
	height: 45rem;
	margin: 0 1rem 2rem 1rem;
	width: 31.3333rem;
	background-color: #fff;
	box-shadow: none;
	border: 1px solid ${color_grey_6};
	border-radius: 8px;
	overflow: hidden;
`;

const Image = styled.div`
	width: 100%;
	height: 45%;
	display: flex;
	justify-content: center;
	margin-top: .5rem;
	overflow: hidden;

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

const ShowAllBtn = styled.button`
	display: block;
	margin: 0 auto;
	font-family: inherit;
	font-size: 1.5rem;
	font-weight: 400;
	text-transform: uppercase;
	background-color: transparent;
	outline: none;
	cursor: pointer;
	color: ${color_grey_4};
	border: none;

	:hover{
		color: ${color_grey_2};
		border-bottom: 1px solid ${color_grey_2};;
	};

	:active{
		color: ${color_grey_3};
		border-bottom: 1px solid ${color_grey_3};;
	};
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

const CardComponent = ({className, p_array, isShowAll}) => (
	<Cards className={className} isShowAll={isShowAll}>
			{p_array.map(({imgPath, title, text, liveLink, sourceLink}, i) => (
				<Card key={i}>
					<Image><img src={imgPath}/></Image>
					<DetailsComponent title={title} text={text}/>
					<ButtonsComponent liveLink={liveLink} sourceLink={sourceLink}/>
				</Card>
			))}
	</Cards>
)

//------------------------------------------------------------------------------

class Portfolio extends Component{
	constructor(){
		super();
		this.state = {
			showAllText: 'Show All',
			isShowAll: false
		}
	}

	showAll = () => {
		if(this.state.isShowAll){
			this.setState({
				showAllText: 'Show All',
				isShowAll: false
			});
		}else{
			this.setState({
				showAllText: 'Hide',
				isShowAll: true
			});
		}
	}

	render(){
		return(
			<Container title='Portfolio' transparent>
				<Wrapper>
					<CardComponent p_array={portfolio_array} isShowAll={this.state.isShowAll}/>
					<ShowAllBtn onClick={this.showAll}>{this.state.showAllText}</ShowAllBtn>
				</Wrapper>
			</Container>
		)
	}
}

export default Portfolio;