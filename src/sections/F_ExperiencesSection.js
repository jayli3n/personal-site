import React, {Component} from 'react';
import styled from 'styled-components';
import { media } from '../util';
import { EXPERIENCES } from '../data';
import {
	Section,
	GAAnchor
} from '../components';
import { COLORS } from '../atoms';


const OneExperience = ({ logoPath, company, link, position, duration, details }) => (
	<ExperienceDiv>
		<ImageDiv className='scrollreveal'>
			<img src={logoPath} alt={company} />
		</ImageDiv>
		<div className='scrollreveal'>
			<CompanyAnchor target='_blank' rel="noopener" href={link}>
				{company}
			</CompanyAnchor>
			<PositionText>{position}</PositionText>
			<DurationText>{duration}</DurationText>
			<Ul>
				{details.map((detail, i) => (
					<Li key={i}>{detail}</Li>
				))}
			</Ul>
		</div>
	</ExperienceDiv>
);

export class ExperiencesSection extends Component {
	render() {
		return (
			<Section title='What I&apos;ve done so far'>
				<div>
					{EXPERIENCES.map((info, i) => <OneExperience key={i} info={info} />)}
				</div>
			</Section>
		)
	}
}

const ExperienceDiv = styled.div`
	display: flex;
	align-items: center;
	padding: 4rem 3rem;

	:first-child{
		padding-top: 3rem;
	}

	:last-child{
		padding-bottom: 3rem;
	}

	:not(:last-child){
		border-bottom: 1px solid ${COLORS.GREY_7};
	}

	${media.sizeV`
		flex-direction: column;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	`}
`;

const ImageDiv = styled.div`
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
		margin: 0 auto 1rem auto;
	`}
`;

const CompanyAnchor = styled(GAAnchor)`
	:link,
	:visited{
		font-size: 2.5rem;
		font-weight: 400;
		color: ${COLORS.PRIMARY};
		text-decoration: none;
	};

	:hover{
		text-decoration: underline;
	};
`;

const PositionText = styled.p`
	font-size: 1.7rem;
	font-weight: 400;
	margin: .8rem 0;
	color: ${COLORS.GREY_3}
`;

const DurationText = styled.p`
	font-size: 1.6rem;
	font-weight: 300;
	margin-bottom: 1.2rem;
	color: ${COLORS.GREY_4}
`;

const Ul = styled.ul`
	margin-left: 1.7rem;
	list-style-position: outside;
`;

const Li = styled.li`
	font-size: 1.8rem;
	font-weight: 300;
	line-height: 1.3;
	color: ${COLORS.GREY_2};
`;
