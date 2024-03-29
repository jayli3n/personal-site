import React, {Component} from 'react';
import styled from 'styled-components';
import { media } from '../util';
import {
	COLORS,
	TYPOGRAPHY
} from '../atoms';
import { Section } from '../components';
import { technologies } from '../assets';


export class TechnologiesSection extends Component {
	render() {
		return (
			<Section id={this.props.id} title='Some Skills (Outdated)'>
				<InnerDiv>
					{technologies.map(({ name, fill, bgColor, Svg }, i) => (
						<IconDiv key={i}>
							<Icon fill={fill} bgColor={bgColor} className='scrollreveal'><Svg /></Icon>
							<TYPOGRAPHY.H6>{name}</TYPOGRAPHY.H6>
						</IconDiv>
					))}
				</InnerDiv>
			</Section>
		)
	}
}

const InnerDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	padding: 1rem 0;

	@supports (display: grid) {
		display: grid;  
		grid-template-columns: repeat(auto-fit, minmax(14rem, .4fr));
		justify-items: center;
		align-content: start;
		align-items: start;
	}
`;

const IconDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 1.5rem;
	min-width: 11rem;
	transition: all .2s;

	& > :last-child {
		margin-top: 1rem;
	}

	:hover {
		transform: scale(1.05);
	};

	${media.sizeVI`
		min-width: 9rem;
	`}
`;

const Icon = styled.div`
	text-align: center;
	border-radius: 1.5rem;
	padding: 1.7rem;
	fill: ${props => props.fill || COLORS.WHITE};
	background-color: ${props => props.bgColor};
	height: 7rem;
	width: 7rem;

	${media.sizeVI`
		padding: 1.2rem;
		border-radius: 1rem;
		height: 6rem;
		width: 6rem;
	`}
`;
