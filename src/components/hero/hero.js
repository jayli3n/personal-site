import React, {Component} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {media} from '../../utils/mediaQueriesBuilder';
import smoothScroll from '../../utils/smoothScroll';
import {Socials} from '../../atoms/socials';
import {
	color_grey_4,
	color_primary,
	color_primary_dark
} from '../../atoms/variables';
import {
	H1,
	H4
} from '../../atoms/typography';
import avatar from '../../images/avatar.jpg';
import ResumePDF from '../../Jay_Li_Resume_2019.pdf';


const StyledSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10rem 6rem;
	height: 96vh;
	background-color: rgba(0,0,0,.02);
`;

const InfoBox = styled.div`
	text-align: center;
`;

const Avatar = styled.div`
	display: inline-block;
	background-image: url('${avatar}');
	background-position: center;
	background-size: cover;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	margin-bottom: 2rem;
`;

const Name = styled(H1)`
	color: #fff;
	margin-bottom: 1.3rem;
`;

const Status = styled(H4)`
	font-weight: 300;
	color: #fff;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 2rem;
	width: auto;
`;

const Button = styled.a`
	color: #fff;
	font-size: 1.6rem;
	font-family: inherit;
	font-weight: inherit;
	width: 15rem;
	text-decoration: none;
	padding: 1.5rem 0;
	border-radius: 3px;
	border: 2px solid ${props => props.secondary ? '#fff' : 'transparent'};
	border-bottom: 2px solid ${props => props.secondary ? '#fff' : color_primary_dark};
	background-color: ${props => props.secondary ? 'rgba(27,32,35, .6)' : color_primary};
	cursor: pointer;
	transition: all .2s;
	outline: none;

	:not(:last-child){
		margin-right: 2rem;
	};

	:hover{
		transform: scale(1.05);
	}

	:active{
		transform: scale(1);
		background-color: ${props => props.secondary ? 'rgba(27,32,35, .9)' : color_primary_dark};
		border: 2px solid ${props => props.secondary ? `${color_grey_4}` : 'transparent'};
		color: ${color_grey_4};
	}

	${media.sizeV`
		width: 13rem;
	`}
`;

//------------------------------------------------------------------------------

class Hero extends Component{
	render(){
		return(
			<StyledSection>
				<InfoBox>
					<Avatar className='scrollreveal'/>
					<Name className='scrollreveal'>Jay Li</Name>
					<Status className='scrollreveal'>&lt; Full-Stack Web Developer &#47;&gt;</Status>
					<Buttons className='scrollreveal'>
						<Button onClick={() => {
								smoothScroll('footer');
								ReactGA.event({
						            category: 'Hero',
						            action: 'Contact Me click',
						        });
							}}>Contact Me</Button>
						<Button secondary href={ResumePDF} target='_blank' rel="noopener" onClick={() => {
								ReactGA.event({
						            category: 'Hero',
						            action: 'Resume click',
						        });
							}}>Resume</Button>
					</Buttons>
					<div className='scrollreveal'><Socials/></div>
				</InfoBox>
			</StyledSection>
		)
	}
}

export default Hero;