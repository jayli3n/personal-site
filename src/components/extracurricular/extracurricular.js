import React, {Component} from 'react';
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

class Extracurricular extends Component{
	render(){
		return(
			<Container title='Outside of Work'>
				<Wrapper>
					<ActivityComponent imgPath={lit_img} title='Friends' details='I find time to spend with my friends for occasional movie marathons, board games and other stuff that friends do.'/>
					<ActivityComponent imgPath={workout_img} title='Workout' details='Incredibly important to keep my body moving especially when I spend my time working at a desk all day.'/>
					<ActivityComponent imgPath={racket_img} title='Sports' details='I enjoy racket sports such as tennis and badminton. I play badminton at a local club and attempted a few tournaments, did not go well.'/>
					<ActivityComponent imgPath={book_img} title='Learning' details='The rest of my time are spent discovering new ideas and picking up skills from various online platforms, podcasts and audiobooks.'/>
				</Wrapper>
			</Container>
		)
	}
}

export default Extracurricular;