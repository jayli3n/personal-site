import React from 'react';
import styled from 'styled-components';
import {Container} from '../../atoms/container';
import {
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_primary
} from '../../atoms/variables';

import placeholder from '../../images/portfolio/facial_recog.jpg';


const my_system_list = [
	{
		text: 'be humble',
		link: '#'
	},
	{
		text: 'respectful',
		link: '#'
	},
	{
		text: 'read everyday',
		link: '#'
	},
	{
		text: 'pursue passions, not paychecks',
		link: '#'
	}
];

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem 0;
`;

const List = styled.ol`
	padding: 2rem;
	text-align: center;
	list-style-position: inside;
	list-style-type: none;
`;

const Item = styled.li`
	font-size: 3.2rem;
	font-weight: 200;
	margin-bottom: .5rem;

	a{
		:link,
		:visited{
			text-decoration: none;
			color: ${color_grey_2};
			cursor: pointer;
		}

		:hover{
			color: ${color_primary};
		};
	};
`;

const MySystemComponent = ({className, my_system_list}) => (
	<Wrapper className={className}>
		<List>
			{my_system_list.map(({text, link}, i) => (
				<Item key={i}>👉 <a href={link} target='_blank'>{text}</a> 👈</Item>
			))}
		</List>
	</Wrapper>
)

//------------------------------------------------------------------------------

const MySystem = () => {
	return(
		<Container title='This is My System 🧘🏻‍♂️'>
			<MySystemComponent my_system_list={my_system_list}/>
		</Container>
	)
}

export default MySystem;