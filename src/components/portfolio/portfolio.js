import React from 'react';
import styled from 'styled-components';
import {
	H2,
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_6,
	color_grey_7
} from '../../atoms/variables';
import {Container} from '../../atoms/container';
import {Button as ButtonAtom} from '../../atoms/button';

import facial_recog from '../../images/portfolio/facial_recog.jpg';
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
		title: 'Nexter Front End',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	}
];


const Wrapper = styled.div`
	width: 95%;
	display: flex;
	padding-bottom: 2rem;
	overflow: scroll hidden;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;

	height: 45rem;
	width: 30rem;
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
	height: 20rem;
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
	margin-bottom: .8rem;
`;

const Buttons = styled.div`
	align-self: flex-end;
	margin-top: auto;
	padding: 1.8rem 1.6rem;	
`;

const Button = styled(ButtonAtom)`
	font-size: 1.4rem;
	color: #aaa;
	padding: .5rem 1rem;
	border: 1px solid #aaa;
	border-radius: 3px;

	:not(:last-child){
		margin-right: 1rem;
	};
`;

const DetailsComponent = ({title, text}) => {
	return(
		<div>
			<Details>
				<StyledH4>{title}</StyledH4>
				<P>{text}</P>
			</Details>
		</div>
	)
}

const CardComponent = ({className, p_array}) => (
	<Wrapper className={className}>
		{p_array.map(({imgPath, title, text, liveLink, sourceLink}, i) => (
			<Card key={i}>
				<Image><img src={imgPath}/></Image>
				<DetailsComponent title={title} text={text}/>

				<Buttons>
					<Button href={liveLink}>Live</Button>
					<Button href={sourceLink}>Source</Button>
				</Buttons>
			</Card>
		))}
	</Wrapper>
)

//------------------------------------------------------------------------------

const Portfolio = () => {
	return(
		<Container title='Portfolio' transparent>
			<CardComponent p_array={portfolio_array}/>
		</Container>
	)
}

export default Portfolio;