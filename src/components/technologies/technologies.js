import React from 'react';
import styled from 'styled-components';
import {
	H3
} from '../../atoms/typography';
import StyledSection from '../../atoms/section';

import { ReactComponent as NodeJS } from '../../images/technologies/node-dot-js.svg';
import { ReactComponent as Shopify } from '../../images/technologies/shopify.svg';
import { ReactComponent as Sass } from '../../images/technologies/sass.svg';
import { ReactComponent as Redux } from '../../images/technologies/redux.svg';
import { ReactComponent as ReactSvg } from '../../images/technologies/react.svg';
import { ReactComponent as PostgreSQL } from '../../images/technologies/postgresql.svg';
import { ReactComponent as JS } from '../../images/technologies/javascript.svg';
import { ReactComponent as Html5 } from '../../images/technologies/html5.svg';
import { ReactComponent as Css3 } from '../../images/technologies/css3.svg';
import { ReactComponent as Git } from '../../images/technologies/git.svg';
import { ReactComponent as Bootstrap } from '../../images/technologies/bootstrap.svg';


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

	.name{
		margin-top: 1rem;
	}

	:hover{
		transform: scale(1.05);

		.icon{
			box-shadow: 0 .3rem 1rem rgba(0,0,0,.2);
		}
	};
`;

const Icon = styled.div`
	text-align: center;
	border-radius: 50%;
	padding: 1.7rem;
	fill: #fff;
	height: 7rem;
	width: 7rem;
`;

//------------------------------------------------------------------------------

const Technologies = () => {
	return(
		<StyledSection title='Professional Skills'>
			<Wrapper>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#61DAFB'}}>
						<ReactSvg/>
					</Icon>
					<H3 className='name'>React</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#764ABC'}}>
						<Redux/>
					</Icon>
					<H3 className='name'>Redux</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#F7DF1E'}}>
						<JS/>
					</Icon>
					<H3 className='name'>Javascript</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#E34F26'}}>
						<Html5/>
					</Icon>
					<H3 className='name'>HTML</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#1572B6'}}>
						<Css3/>
					</Icon>
					<H3 className='name'>CSS</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#CC6699'}}>
						<Sass/>
					</Icon>
					<H3 className='name'>Sass</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#339933'}}>
						<NodeJS/>
					</Icon>
					<H3 className='name'>NodeJS</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#336791'}}>
						<PostgreSQL/>
					</Icon>
					<H3 className='name'>PostgreSQL</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#F05032'}}>
						<Git/>
					</Icon>
					<H3 className='name'>Git</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#563D7C'}}>
						<Bootstrap/>
					</Icon>
					<H3 className='name'>Bootstrap</H3>
				</IconBox>
				<IconBox>
					<Icon className='icon' style={{"background-color": '#7AB55C'}}>
						<Shopify/>
					</Icon>
					<H3 className='name'>Shopify</H3>
				</IconBox>
			</Wrapper>
		</StyledSection>
	)
}

export default Technologies;