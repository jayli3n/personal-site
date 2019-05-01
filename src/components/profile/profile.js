import React from 'react';
import styled from 'styled-components';
import {
	H2,
	H4,
	P
} from '../../atoms/typography';
import StyledSection from '../../atoms/section';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;
`;

const About = styled.div`
	flex: 1 0 60%;
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

const InfoItem = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;

	:not(:last-child){
		margin-bottom: 1rem;
	};
`;

const StyledH2 = styled(H2)`
	margin-bottom: 2rem;
`;

const StyledH4 = styled(H4)`
	flex: 0 1 10rem;
	margin-right: 2rem;
`;

//------------------------------------------------------------------------------

const Profile = () => {
	return(
		<StyledSection title='Get to know me'>
			<Wrapper>
				<About>
					<StyledH2>About</StyledH2>
					<P>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Mauris nunc congue nisi vitae suscipit tellus mauris a. Egestas congue quisque egestas diam in. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.
					</P>
				</About>
				<Info>
					<StyledH2>Info</StyledH2>
					<InfoList>
						<InfoItem>
							<StyledH4>Email:</StyledH4>
							<P>jay.li23697&#64;gmail.com</P>
						</InfoItem>
						<InfoItem>
							<StyledH4>Location:</StyledH4>
							<P>Australia</P>
						</InfoItem>
						<InfoItem>
							<StyledH4>Languages:</StyledH4>
							<P>English, Mandarin, Cantonese</P>
						</InfoItem>
					</InfoList>
				</Info>
			</Wrapper>
		</StyledSection>
	)
}

export default Profile;