import React from 'react';
import styled from 'styled-components';
import {
	H2,
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_7
} from '../../atoms/variables';
import {Container} from '../../atoms/container';
import facial_recog from '../../images/portfolio/facial_recog.jpg';

const Wrapper = styled.div`

`;

const Card = styled.figure`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 2.5rem;
	background-color: #fff;
	box-shadow: 0 .5rem 2rem rgba(0,0,0,.1);
	border-radius: 3px;
`;

const Image = styled.div`
	height: 25rem;
	margin-right: 2rem;
	overflow: hidden;

	img{
		height: 100%;
		width: auto;
	}
`;

const Details = styled.div`
	flex: 1 1;
`;

//------------------------------------------------------------------------------

const Portfolio = () => {
	return(
		<Container title='Portfolio' transparent>
			<Wrapper>
				<Card>
					<Image>
						<img src={facial_recog}/>
					</Image>
					<Details>
						<H4>Facial Recognition Web App</H4>
						<P>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.
						</P>
					</Details>
				</Card>
			</Wrapper>
		</Container>
	)
}

export default Portfolio;