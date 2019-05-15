import React, {Component} from 'react';
import styled from 'styled-components';
import {media} from '../../utils/mediaQueriesBuilder';
import {Container} from '../../atoms/container';
import {
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_grey_3,
	color_grey_4,
	color_grey_5,
	color_primary
} from '../../atoms/variables';

import tutor_logo from '../../images/experiences/tutor.png';
import ultrave_logo from '../../images/experiences/ultrave.jpg';
import wood_logo from '../../images/experiences/woodplc.jpg';

const experiences_list = [
	{
		logoPath: wood_logo,
		company: 'Wood PLC',
		link: 'https://www.woodplc.com/',
		position: 'Technical Analyst',
		duration: 'Feb 2018 - Present',
		details: [
			'Worked within asset management teams to deliver inspection and turnaround maintenance scopes.',
			'Primarily worked on database management and data manipulation as well as querying SQL data to create progress reports.',
			'Developed scripts and programs for the team to reduce complexity and time of repetitive tasks.',
			'I’m grateful for the time I spent with different clients alongside brilliant engineers; whose work gave me a glimpse into the challenges and rewards of an engineer’s life.'
		]
	},
	{
		logoPath: ultrave_logo,
		company: 'UltraVe',
		link: 'https://www.ultrave.com/',
		position: 'Founder',
		duration: 'September 2017 - July 2018',
		details: [
			'UltraVe is a social media community and online clothing company that promotes healthy eating and a cruelty-free lifestyle.',
			'I have learnt the importance of online marketing and online presence that comes from search engine optimization (SEO) and ongoing community building.',
			'This small project has taught me how to work on tasks independently: site creation, product sponsoring, graphic designs, customer support etc.',
			'As a way to give back, a portion of the proceeds go to animal rescue and shelters.'
		]
	},
	{
		logoPath: tutor_logo,
		company: 'Private Tutor',
		link: '#experiences',
		duration: 'September 2017 - July 2018',
		details: [
			'Graduated school with a body of knowledge which I wanted to give back to the local community.',
			'Focused on 12th grade Mathematics, Physics and Chemistry.',
			'By the end of school semester, my students achieved grade A from lower grades; 2 of which earned a Dux Award (Top ranked student of the year group).',
			'1000+ hours of teaching experience.'
		]
	}
]

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem 0;
`;

const Experience = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;

	${media.sizeV`
		flex-direction: column;
	`}
`;

const Image = styled.div`
	flex: 0 0 auto;
	margin-right: 3rem;
	height: 12rem;
	width: 12rem;
	display: flex;
	justify-content: center;
	border-radius: 50%;
	overflow: hidden;

	img{
		height: 100%;
		width: auto;
	}

	${media.sizeIV`
		height: 10rem;
		width: 10rem;
	`}

	${media.sizeV`
		flex-direction: column;
		margin: 3rem 0 1rem 0;
	`}
`;

const Details = styled.div`
	
`;

const Company = styled.a`
	:link,
	:visited{
		font-size: 2.5rem;
		font-weight: 400;
		color: ${color_primary};
		text-decoration: none;
	};

	:hover{
		text-decoration: underline;
	};
`;

const PositionText = styled.p`
	font-size: 1.7rem;
	font-weight: 400;
	margin-bottom: .6rem;
	color: ${color_grey_3}
`;

const DurationText = styled.p`
	font-size: 1.6rem;
	font-weight: 300;
	margin-bottom: 1rem;
	color: ${color_grey_5}
`;

const Ul = styled.ul`
	margin-left: 1.7rem;
	list-style-position: outside;
`;

const Li = styled.li`
	font-size: 1.8rem;
	font-weight: 300;
	line-height: 1.3;
	color: ${color_grey_2};
`;

//------------------------------------------------------------------------------

class Experiences extends Component{
	render(){
		return(
			<Container title='What I&apos;ve done so far'>
					<Wrapper>
						{experiences_list.map(({logoPath, company, link, position, duration, details}, i) => (
							<Experience key={i}>
								<Image>
									<img src={logoPath}/>
								</Image>
								<Details>
									<Company target='_blank' href={link}>{company}</Company>
									<PositionText>{position}</PositionText>
									<DurationText>{duration}</DurationText>
									<Ul>
										{details.map((detail, i) => (
											<Li key={i}>{detail}</Li>
										))}
									</Ul>
								</Details>
							</Experience>
						))}
					</Wrapper>
			</Container>
		)
	}
}

export default Experiences;