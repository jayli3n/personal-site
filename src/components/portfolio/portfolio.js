import React, {Component} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_grey_3,
	color_grey_4,
	color_grey_6,
	color_primary,
	color_primary_light
} from '../../atoms/variables';
import {Container} from '../../atoms/container';
import {pulseEffect} from '../../atoms/keyframes';
import {svg_icons} from '../../atoms/techIcons';
import { ReactComponent as GithubSvg } from '../../images/icons/github.svg';

import jayli3n_site_img from '../../images/portfolio/jayli3n-site.jpg';
import facial_recognition_img from '../../images/portfolio/facial-recognition-web-app_snapshot.jpg';
import linear_gradient_img from '../../images/portfolio/linear-gradient_snapshot.jpg';
import natours_img from '../../images/portfolio/natours-tour-startup_snapshot.jpg';
import nexter_img from '../../images/portfolio/nexter-real-estate_snapshot.jpg';
import starwars_img from '../../images/portfolio/starwars-api_snapshot.jpg';
import trillo_img from '../../images/portfolio/trillo-hotel-booking_snapshot.jpg';

// add or remove this array to update portfolio
// icons are from "../../atoms/techIcons" and follows the order of the exported icons array
const portfolio_array = [
	{
		imgPath: trillo_img,
		icons: [4,5,6,9],
		title: 'Trillo Front End',
		text: 'A simple and clean front-end for a mockup hotel booking website. Has nice animations.',
		liveLink: 'https://jayli3n.github.io/trillo-front-end/',
		sourceLink: 'https://github.com/jayli3n/trillo-front-end',
	},
	{
		imgPath: facial_recognition_img,
		icons: [0,4,2,7,8,9],
		title: 'Facial Recognition Web App',
		text: 'Detects human faces in an input image and put boxes around them. Uses Clarifai API.',
		liveLink: 'https://jayli3n.github.io/facial-recognition-web-app/',
		sourceLink: 'https://github.com/jayli3n/facial-recognition-web-app',
	},
	{
		imgPath: nexter_img,
		icons: [4,5,6,9],
		title: 'Nexter Real Estate',
		text: 'A mockup real estate website. Made responsive using tons of CSS Grid.',
		liveLink: 'https://jayli3n.github.io/nexter-front-end/',
		sourceLink: 'https://github.com/jayli3n/nexter-front-end',
	},
	{
		imgPath: natours_img,
		icons: [4,5,9],
		title: 'Natours Startup',
		text: 'A mockup landing page for a startup travel agency. Uses old css techniques for responsiveness.',
		liveLink: 'https://jayli3n.github.io/natours-startup/',
		sourceLink: 'https://github.com/jayli3n/natours-startup',
	},
	{
		imgPath: starwars_img,
		icons: [0,4,2,7,9],
		title: 'Star Wars Database',
		text: 'A fun and light-weight web app to display all the Star Wars data you\'ll ever want! Uses AJAX and SWAPI.',
		liveLink: 'https://jayli3n.github.io/starwars/',
		sourceLink: 'https://github.com/jayli3n/starwars',
	},
	{
		imgPath: jayli3n_site_img,
		icons: [0,4,5,2,6,7,9],
		title: 'My Personal Site',
		text: 'It\'s the site you\'re on right now! Designed and built from scratch using React and Styled Components.',
		liveLink: 'https://jayli3n.github.io/personal-site/',
		sourceLink: 'https://github.com/jayli3n/personal-site',
	},
	{
		imgPath: linear_gradient_img,
		icons: [4,5,2],
		title: 'Gradient Background Generator',
		text: 'Pick your own or randomly generate color codes for CSS: linear-gradient( ).',
		liveLink: 'https://jayli3n.github.io/linear-background-generator/',
		sourceLink: 'https://github.com/jayli3n/linear-background-generator',
	}
];


const Cards = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	overflow: hidden;
	height: ${props => props.isShowAll ? '' : '92rem'};
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	height: 45rem;
	margin: 0 1rem 2rem 1rem;
	width: 31.3333rem;
	background-color: #fff;
	box-shadow: 0 0.5px 1px rgba(0,0,0,.15);
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
	opacity: .88;
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
	padding: 1.2rem 1.6rem 1.8rem 1.6rem;	
`;

const StyledH4 = styled(H4)`
	margin-top: 1rem;
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

const IconsBox = styled.div`
	display: flex;
`

const Icon = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	fill: ${props => props.color ? props.color : '#fff'};
	text-align: center;
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
	margin: 1.8rem auto;
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


const DetailsComponent = ({className, icons, title, text}) => {
	return(
		<Details className={className}>
			<IconsBox>
				{icons.map((index, i) => (
					<Icon color={color_grey_2} key={i}>{svg_icons[index].svg}</Icon>
				))}
			</IconsBox>
			<StyledH4>{title}</StyledH4>
			<P>{text}</P>
		</Details>
	)
}

// buttons component for the live / source code buttons
const ButtonsComponent = ({className, title, liveLink, sourceLink}) => {
	return(
		<Buttons className={className}>
			<Button href={liveLink} target='_blank' rel="noopener" pulsate 
				onClick={() => {
					ReactGA.event({
			            category: 'Portfolio',
			            action: `Live: ${title}`,
			        });
				}}>
				<WhiteDot id='live'/><span>Live</span>
			</Button>
			<Button href={sourceLink} target='_blank' rel="noopener" secondary 
				onClick={() => {
					ReactGA.event({
			            category: 'Portfolio',
			            action: `Source: ${title}`,
			        });
				}}>
				<Icon id='github'><GithubSvg/></Icon><span>Source</span>
			</Button>
		</Buttons>
	)
}

const CardComponent = ({className, p_array, isShowAll}) => (
	<Cards className={className} isShowAll={isShowAll}>
			{p_array.map(({imgPath, icons, title, text, liveLink, sourceLink}, i) => (
				<Card key={i} className='scrollreveal'>
					<Image><img src={imgPath} alt={text}/></Image>
					<DetailsComponent icons={icons} title={title} text={text}/>
					<ButtonsComponent title={title} liveLink={liveLink} sourceLink={sourceLink}/>
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
				<div>
					<CardComponent p_array={portfolio_array} isShowAll={this.state.isShowAll}/>
					<ShowAllBtn onClick={this.showAll}>{this.state.showAllText}</ShowAllBtn>
				</div>
			</Container>
		)
	}
}

export default Portfolio;