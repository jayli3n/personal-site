import React from 'react';
import styled from 'styled-components';
import {
	H3
} from '../../atoms/typography';
import {Container} from '../../atoms/container';

import { ReactComponent as NodeJS_svg } from '../../images/technologies/node-dot-js.svg';
import { ReactComponent as Shopify_svg } from '../../images/technologies/shopify.svg';
import { ReactComponent as Sass_svg } from '../../images/technologies/sass.svg';
import { ReactComponent as Redux_svg } from '../../images/technologies/redux.svg';
import { ReactComponent as React_svg } from '../../images/technologies/react.svg';
import { ReactComponent as PostgreSQL_svg } from '../../images/technologies/postgresql.svg';
import { ReactComponent as JS_svg } from '../../images/technologies/javascript.svg';
import { ReactComponent as Html5_svg } from '../../images/technologies/html5.svg';
import { ReactComponent as Css3_svg } from '../../images/technologies/css3.svg';
import { ReactComponent as Git_svg } from '../../images/technologies/git.svg';
import { ReactComponent as Bootstrap_svg } from '../../images/technologies/bootstrap.svg';

const svg_icons = [
	{
		name: 'React',
		bgColor: '#61DAFB',
		svg: <React_svg/>
	},
	{
		name: 'Redux',
		bgColor: '#764ABC',
		svg: <Redux_svg/>
	},
	{
		name: 'Javascript',
		bgColor: '#F7DF1E',
		svg: <JS_svg/>
	},
	{
		name: 'HTML',
		bgColor: '#E34F26',
		svg: <Html5_svg/>
	},
	{
		name: 'CSS',
		bgColor: '#1572B6',
		svg: <Css3_svg/>
	},
	{
		name: 'Sass',
		bgColor: '#CC6699',
		svg: <Sass_svg/>
	},
	{
		name: 'NodeJS',
		bgColor: '#339933',
		svg: <NodeJS_svg/>
	},
	{
		name: 'PostgreSQL',
		bgColor: '#336791',
		svg: <PostgreSQL_svg/>
	},
	{
		name: 'Git',
		bgColor: '#F05032',
		svg: <Git_svg/>
	},
	{
		name: 'Bootstrap',
		bgColor: '#563D7C',
		svg: <Bootstrap_svg/>
	},
	{
		name: 'Shopify',
		bgColor: '#7AB55C',
		svg: <Shopify_svg/>
	}
];


const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	padding: 1rem 0;
`;

const IconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 2rem;
	min-width: 11rem;
	transition: all .2s;

	& > :last-child{
		margin-top: 1rem;
	}

	:hover{
		transform: scale(1.05);

		div{
			box-shadow: 0 .3rem .5rem rgba(0,0,0,.1);
		}
	};
`;

const Icon = styled.div`
	text-align: center;
	border-radius: 50%;
	padding: 1.7rem;
	fill: #fff;
	background-color: ${props => props.bgColor};
	height: 7rem;
	width: 7rem;
`;

const Icons = ({className, list}) => (
	<Wrapper className={className}>
		{list.map(({name, bgColor, svg}, i) => (
			<IconBox key={i}>
				<Icon bgColor={bgColor}>{svg}</Icon>
				<H3>{name}</H3>
			</IconBox>
		))}
	</Wrapper>
);

//------------------------------------------------------------------------------

const Technologies = () => {
	return(
		<Container title='Professional Skills 🖥'>
				<Icons list={svg_icons}/>
		</Container>
	)
}

export default Technologies;