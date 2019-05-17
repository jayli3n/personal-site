import React, {Component} from 'react';
import styled from 'styled-components';
import {
	H2,
	P
} from '../../atoms/typography';
import {Container} from '../../atoms/container';
import { ReactComponent as GmailSvg } from '../../images/icons/gmail.svg';
import { ReactComponent as LocationSvg } from '../../images/icons/pin.svg';
import { ReactComponent as TranslateSvg } from '../../images/icons/google_translate.svg';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;
`;

const About = styled.div`
	flex: 1 1 60%;
	padding: 2rem;
`;

const Info = styled.div`
	flex: 1 0 40%;
	padding: 2rem;
`;

const InfoList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-between;
`;

const ListItem = styled.li`
	display: flex;
	align-items: flex-start;

	:not(:last-child){
		margin-bottom: 1rem;
	};
`;

const StyledH2 = styled(H2)`
	margin-bottom: 2rem;
`;

const Icon = styled.div`
	height: auto;
	width: 2.5rem;
	margin-right: 1.5rem;

	& > * {
		display: block;
		margin: auto;
	}
`;

const ListItemComponent = ({className, svg, value}) => {
	return(
		<ListItem className={className}>
			<Icon>{svg}</Icon>
			<P>{value}</P>
		</ListItem>
	)
}

//------------------------------------------------------------------------------

class Profile extends Component{
	render(){
		return(
			<Container title='Get to know me'>
				<Wrapper>
					<About className='scrollreveal'>
						<StyledH2>Profile</StyledH2>
						<P>
							Hi, I’m Jay. It’s great to see you on my page!<br/>
							I’m a holistic software engineer who loves to see magic happen and problems solved from my lines of code. 
							On top of that, I love to learn; it could be little things but I always strive to become a slightly better version of myself than I was the day before.
						</P>
					</About>
					<Info className='scrollreveal'>
						<StyledH2>Info</StyledH2>
						<InfoList>
							<ListItemComponent svg={<GmailSvg/>} value='jayli3n&#64;gmail.com'/>
							<ListItemComponent svg={<LocationSvg/>} value='Australia'/>
							<ListItemComponent svg={<TranslateSvg/>} value='English, Mandarin, Cantonese'/>
						</InfoList>
					</Info>
				</Wrapper>
			</Container>
		)
	}
}

export default Profile;