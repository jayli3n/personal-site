import React, {Component} from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../atoms';
import { Section } from '../components';
import { icons } from '../assets';


const ListItemComponent = ({ svg, value }) => (
	<ListItem>
		<IconDiv>{svg}</IconDiv>
		<TYPOGRAPHY.P>{value}</TYPOGRAPHY.P>
	</ListItem>
);

export class ProfileSection extends Component {
	render() {
		return (
			<Section id={this.props.id} title='Get to know me'>
				<WrapperDiv>
					<AboutDiv className='scrollreveal'>
						<StyledH5>Profile</StyledH5>
						<TYPOGRAPHY.P>
							Hi, I’m James. It’s great to see you on my page!<br />
							I’m a software engineer who loves to see magic happen and problems solved from my lines of code. 
							In addition, I love to work in teams and make meaningful connections with people to help each other learn and grow.
						</TYPOGRAPHY.P>
					</AboutDiv>
					<InfoDiv className='scrollreveal'>
						<StyledH5>Info</StyledH5>
						<Ul>
							<ListItemComponent svg={<icons.GmailSVG />}
								value='jayli3n&#64;gmail.com' />
							<ListItemComponent svg={<icons.PinSVG />}
								value='Australia' />
							<ListItemComponent svg={<icons.TranslateSVG />}
								value='English, Mandarin, Cantonese' />
						</Ul>
					</InfoDiv>
				</WrapperDiv>
			</Section>
		)
	}
};

const WrapperDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem .6rem;
`;

const AboutDiv = styled.div`
	flex: 1 1 60%;
	padding: 2rem;
`;

const InfoDiv = styled.div`
	flex: 1 0 40%;
	padding: 2rem;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-between;
	list-style: none;
`;

const ListItem = styled.li`
	display: flex;
	align-items: flex-start;

	:not(:first-child) {
		margin-top: 1.2rem;
	};
`;

const StyledH5 = styled(TYPOGRAPHY.H5)`
	margin-bottom: 1.5rem;
`;

const IconDiv = styled.div`
	width: 2.5rem;
	height: auto;
	margin-right: 1.55rem;

	& > * {
		display: block;
		margin: auto;
	}
`;
