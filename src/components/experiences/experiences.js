import React from 'react';
import styled from 'styled-components';
import {Container} from '../../atoms/container';
import {
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
} from '../../atoms/variables';

import placeholder from '../../images/portfolio/facial_recog.jpg';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 0;
`;

const Activity = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 2rem;
`;

const Image = styled.div`
	flex: 1 1 50%;
	margin: 1rem;
	height: 20rem;
	display: flex;
	justify-content: center;

	img{
		height: 100%;
		width: auto;
	}
`;

const Details = styled.div`
	order: ${props => props.reverse ? '-1' : 0};
	flex: 1 1 50%;
`;

const StyledH3 = styled.h3`
	font-size: 2.5rem;
	font-weight: 400;
	margin-bottom: 2rem;
`;

const ActivityComponent = ({className, reverse, imgPath, title, details}) => {
	return(
		<Activity>
			<Image>
				<img src={imgPath}/>
			</Image>
			<Details reverse={reverse}>
				<StyledH3>{title}</StyledH3>
				<P>{details}</P>
			</Details>
		</Activity>
	)
}

//------------------------------------------------------------------------------

const Experiences = () => {
	return(
		<Container title='Experiences 🚀'>
			<Wrapper>
				<ActivityComponent imgPath={placeholder} title='Badminton' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
				<ActivityComponent reverse imgPath={placeholder} title='Workout' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
			</Wrapper>
		</Container>
	)
}

export default Experiences;