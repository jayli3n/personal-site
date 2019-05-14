import React, {Component} from 'react';
import styled from 'styled-components';
import {
	H3
} from '../../atoms/typography';
import {Container} from '../../atoms/container';
import {svg_icons} from '../../atoms/techIcons';

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
	margin: 1.5rem;
	min-width: 11rem;
	transition: all .2s;

	& > :last-child{
		margin-top: 1rem;
	}

	:hover{
		transform: scale(1.05);
	};
`;

const Icon = styled.div`
	text-align: center;
	border-radius: 1.5rem;
	padding: 1.7rem;
	fill: #fff;
	background-color: ${props => props.color};
	height: 7rem;
	width: 7rem;
`;

const Icons = ({className, list}) => (
	<Wrapper className={className}>
		{list.map(({name, color, svg}, i) => (
			<IconBox key={i}>
				<Icon color={color}>{svg}</Icon>
				<H3>{name}</H3>
			</IconBox>
		))}
	</Wrapper>
);

//------------------------------------------------------------------------------

class Technologies extends Component{
	render(){
		return(
			<Container title='Professional Skills'>
					<Icons list={svg_icons}/>
			</Container>
		)
	}
}

export default Technologies;