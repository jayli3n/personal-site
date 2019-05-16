import React, {Component} from 'react';
import styled from 'styled-components';
import {media} from '../../utils/mediaQueriesBuilder';
import {Container} from '../../atoms/container';
import {
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_primary
} from '../../atoms/variables';


const my_system_list = [
	{
		text: 'be humble',
		link: 'https://www.franksonnenbergonline.com/blog/be-humble-dont-let-success-go-to-your-head/'
	},
	{
		text: 'be respectful',
		link: 'https://www.azquotes.com/picture-quotes/quote-everyone-has-something-to-teach-you-if-you-are-humble-enough-to-learn-mark-driscoll-81-13-11.jpg'
	},
	{
		text: 'always learning',
		link: 'https://www.entrepreneur.com/article/300360/'
	},
	{
		text: 'enjoy the ride!',
		link: 'https://guardianlv.com/2014/04/life-is-a-journey-buckle-up-and-enjoy-the-ride/'
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

	${media.sizeII`
		font-size: 2.8rem;
	`}
`;

const MySystemComponent = ({className, my_system_list}) => (
	<Wrapper className={className}>
		<List>
			{my_system_list.map(({text, link}, i) => (
				<Item key={i} className='scrollreveal'>👉 <a href={link} target='_blank'>{text}</a> 👈</Item>
			))}
		</List>
	</Wrapper>
)

//------------------------------------------------------------------------------

class MySystem extends Component {
	render(){
		return(
			<Container title='This is My System'>
				<MySystemComponent my_system_list={my_system_list}/>
			</Container>
		)
	}
}

export default MySystem;