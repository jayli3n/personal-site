import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {Socials} from '../../atoms/socials';
import {
	H1,
	P
} from '../../atoms/typography';
import {
	color_grey_4,
	color_grey_5,
	color_grey_6,
	color_primary
} from '../../atoms/variables';


const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,.2);
	padding: 8rem 6rem 7rem 6rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Title = styled(H1)`
	margin-bottom: 3rem;
	color: #fff;
`;

const Content = styled(P)`
	margin-bottom: 3rem;
	color: ${color_grey_6};
`;

const Copyright = styled(P)`
	font-size: 1.4rem;
	color: ${color_grey_5};
`
const AdditionalText = styled(P)`
	font-size: 1.4rem;
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 2rem 2.5rem;
	text-align: right;
	color: ${color_grey_4};
`

const A = styled.a`
	:link,
	:visited{
		padding: .1rem .5rem;
		background-color: ${color_primary};
		color: #fff;
		text-decoration: none;
	};

	:hover{
		border-bottom: 2px solid #fff;
	};
`;

//------------------------------------------------------------------------------

const Footer = () => {
	return(
		<Container>
			<Wrapper className='scrollreveal'>
				<Title className='scrollreveal'>Let's get in touch!</Title>
				<Content>I'm always open to make new friends.<br/>
					Shoot me an email at: <A href = "mailto: jayli3n@gmail.com" rel="noopener" onClick={() => {
					ReactGA.event({
			            category: 'Footer',
			            action: 'Email click',
			        });
				}}>jayli3n@gmail.com</A></Content>
				<Copyright>&copy; 2019 - Copyright Jay Li, All Rights Reserved.</Copyright>
				<Socials small/>
			</Wrapper>
			<AdditionalText>Designed & developed by me from scratch.<br/>
				Source code for the site can be found <A href='https://github.com/jayli3n/personal-site' target='_blank' rel="noopener" onClick={() => {
					ReactGA.event({
			            category: 'Footer',
			            action: 'Source code click',
			        });
				}}>here</A>.
			</AdditionalText>
		</Container>
	)
}

export default Footer;