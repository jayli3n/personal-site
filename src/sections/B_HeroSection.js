import React, {Component} from 'react';
import styled from 'styled-components';
import {
	media,
	smoothScroll
} from '../util';
import {
	Socials,
	GAAnchor,
} from '../components';
import {
	COLORS,
	TYPOGRAPHY,
	COMMON_STYLES
} from '../atoms';
import {
	resumePDF,
	avatarJPG
} from '../assets';


export class HeroSection extends Component {
	render() {
		return (
			<Section id={this.props.id} transparent>
				<InfoDiv>
					<AvatarDiv className='scrollreveal' />
					<TYPOGRAPHY.H4 className='scrollreveal' color={COLORS.WHITE}>James Li</TYPOGRAPHY.H4>
					<TYPOGRAPHY.H6 className='scrollreveal' color={COLORS.WHITE}>
						&lt; Software Developer &#47;&gt;
					</TYPOGRAPHY.H6>
					<AnchorsDiv className='scrollreveal'>
						<Anchor onClick={() => smoothScroll('footer')}>
							<TYPOGRAPHY.P color={COLORS.WHITE} align='center'>Contact Me</TYPOGRAPHY.P>
						</Anchor>
						<Anchor secondary href={resumePDF} target='_blank' rel="noopener noreferrer">
							<TYPOGRAPHY.P color={COLORS.WHITE} align='center'>Resume</TYPOGRAPHY.P>
						</Anchor>
					</AnchorsDiv>
					<StyledSocials className='scrollreveal' />
				</InfoDiv>
			</Section>
		)
	}
};

const Section = styled.section`
	height: 95.5vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AvatarDiv = styled.div`
	background-size: cover;
	background-position: center;
	background-image: url(${avatarJPG});
	height: 11.5rem;
	width: 11.5rem;
	border-radius: 50%;
	margin-bottom: 1.6rem;
`;

const AnchorsDiv = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 1.5rem;
	width: auto;
`;

const Anchor = styled(GAAnchor)`
	width: 16rem;
	text-decoration: none;
	padding: 1rem 0;
	border-radius: ${COMMON_STYLES.BORDER_RADIUS};
	border: 2px solid ${props => props.secondary ? COLORS.WHITE : 'transparent'};
	border-bottom: 2px solid ${props => props.secondary ? COLORS.WHITE : COLORS.PRIMARY_DARK};
	background-color: ${props => props.secondary ? `${COLORS.WHITE}10` : COLORS.PRIMARY};
	outline: none;
	cursor: pointer;
	transition: all .2s;

	:not(:last-child) {
		margin-right: 1.6rem;
	};

	:hover {
		transform: scale(1.05);
	}

	:active {
		transform: scale(1);
		color: ${COLORS.GREY_4};
		background-color: ${props => props.secondary ? `${COLORS.GREY_4}20` : COLORS.PRIMARY_DARK};
		border: 2px solid ${props => props.secondary ? COLORS.GREY_4 : 'transparent'};
	}

	${media.sizeV`
		width: 13rem;
	`}
`;

const StyledSocials = styled(Socials)`
	margin-top: 1.7rem;
`;
