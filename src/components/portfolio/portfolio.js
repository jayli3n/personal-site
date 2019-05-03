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

import facial_recog from '../../images/portfolio/facial_recog.jpg';


const portfolio_array = [
	{
		imgPath: facial_recog,
		title: 'Facial Recognition Web App',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: facial_recog,
		title: 'Facial Recognition Web App',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	},
	{
		imgPath: facial_recog,
		title: 'Facial Recognition Web App',
		text: 'Lorem ipsum dolor sit amet, consectetur adiommodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.',
		liveLink: '#',
		sourceLink: '#',
	}
];

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	overflow-X: scroll;
`;

const Card = styled.div`
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
	padding: 1.8rem 1.6rem;
`;

const StyledH4 = styled(H4)`
	margin-bottom: .8rem;
`;

const CardComponent = ({className, p_array}) => (
	<Wrapper className={className}>
		{p_array.map(({imgPath, title, text, linkLive, sourceLink}, i) => (
			<Card key={i}>
				<Image>
					<img src={imgPath}/>
				</Image>
				<Details>
					<StyledH4>{title}</StyledH4>
					<P>{text}</P>
				</Details>
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