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

import lit_img from '../../images/outside/lit.png';
import book_img from '../../images/outside/book.png';
import racket_img from '../../images/outside/racket.png';
import workout_img from '../../images/outside/workout.png';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;
`;

const Activity = styled.div`
	flex: 1 1 50%;
	display: flex;
	padding: 2rem;
	min-width: 31rem;
`;

const Image = styled.div`
	flex: 0 0 auto;
	height: 5rem;
	width: 5rem;
	margin-right: 1rem;
	background-image: ${props => `url(${props.imgPath})`};
	background-position: center;
	background-size: cover;
`;

const Details = styled.div`
	
`;

const StyledH3 = styled.h3`
	font-size: 2.5rem;
	font-weight: 400;
	margin-bottom: 1.5rem;
`;

const ActivityComponent = ({className, imgPath, title, details}) => {
	return(
		<Activity>
			<Image imgPath={imgPath}/>
			<Details>
				<StyledH3>{title}</StyledH3>
				<P>{details}</P>
			</Details>
		</Activity>
	)
}

//------------------------------------------------------------------------------

const Extracurricular = () => {
	return(
		<Container title='Outside of Work'>
			<Wrapper>
				<ActivityComponent imgPath={lit_img} title='Friends' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
				<ActivityComponent imgPath={workout_img} title='Workout' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
				<ActivityComponent imgPath={racket_img} title='Badminton' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
				<ActivityComponent imgPath={book_img} title='Learn new skills' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit.'/>
			</Wrapper>
		</Container>
	)
}

export default Extracurricular;