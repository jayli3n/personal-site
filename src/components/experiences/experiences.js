import React from 'react';
import styled from 'styled-components';
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
		position: 'Technical Analyst',
		duration: 'September 2017 - July 2018',
		details: [
			'Had been involved in the YARA Pilbara Turnaround Shutdown Project.',
			'Taken on the role of "Technical Assistant" in the office & as a Work Pack Coordinator onsite.',
			'Create many programs and scripts with VBA to reduce the complexity and time of repetitive tasks.',
			'Have also been a Document Controller for OJIFS project.'
		]
	},
	{
		logoPath: ultrave_logo,
		company: 'UltraVe',
		position: 'Founder',
		duration: 'September 2017 - July 2018',
		details: [
			'Had been involved in the YARA Pilbara Turnaround Shutdown Project.',
			'Taken on the role of "Technical Assistant" in the office & as a Work Pack Coordinator onsite.',
			'Create many programs and scripts with VBA to reduce the complexity and time of repetitive tasks.',
			'Have also been a Document Controller for OJIFS project.'
		]
	},
	{
		logoPath: tutor_logo,
		company: 'Private Tutor',
		duration: 'September 2017 - July 2018',
		details: [
			'Had been involved in the YARA Pilbara Turnaround Shutdown Project.',
			'Taken on the role of "Technical Assistant" in the office & as a Work Pack Coordinator onsite.',
			'Create many programs and scripts with VBA to reduce the complexity and time of repetitive tasks.',
			'Have also been a Document Controller for OJIFS project.'
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
`;

const Details = styled.div`
	
`;

const StyledH3 = styled.h3`
	font-size: 2.5rem;
	font-weight: 400;
	color: ${color_primary};
`;

const PositionText = styled.p`
	font-size: 1.6rem;
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

const ExperiencesComponent = ({className, experiences_list}) => (
	<Wrapper className={className}>
		{experiences_list.map(({logoPath, company, position, duration, details}, i) => (
			<Experience key={i}>
				<Image>
					<img src={logoPath}/>
				</Image>
				<Details>
					<StyledH3>{company}</StyledH3>
					<PositionText>{position}</PositionText>
					<DurationText>{duration}</DurationText>
					<Ul>
						{details.map((detail, i) => (
							<Li>{detail}</Li>
						))}
					</Ul>
				</Details>
			</Experience>
		))}
	</Wrapper>
)

//------------------------------------------------------------------------------

const Experiences = () => {
	return(
		<Container title='Experiences'>
				<ExperiencesComponent experiences_list={experiences_list}/>
		</Container>
	)
}

export default Experiences;