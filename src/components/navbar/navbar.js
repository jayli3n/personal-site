import React from 'react';
import styled from 'styled-components';
import {
	H1,
	H4,
	P
} from '../../atoms/typography';
import {
	color_grey_2,
	color_grey_3,
	color_grey_4,
	color_grey_6,
	color_grey_7,
	color_primary,
	color_primary_light,
	color_primary_dark
} from '../../atoms/variables';
import avatar from '../../images/avatar.jpg';
import {ReactComponent as Menu_svg} from '../../images/icons/menu.svg';


const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	z-index: 9999;
	padding: 1.6rem 3rem;
	color: #fff;
	background-color: ${color_primary};
	box-shadow: 0 .1rem .15rem rgba(0,0,0,.3);
`;

const Toggler = styled.button`
	display: none;

	position: relative;
	fill: #fff;
	background-color: transparent;
	backface-visibility: hidden;
	height: 3rem;
	width: 3rem;
	transition: all 0.2s;
	border: none;
	cursor: pointer;

	:hover{
		fill: ${color_grey_6};
	};

	:focus{
		outline: none;
	};
`;

const Brand = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const Name = styled.a`
	:link,
	:visited{
		white-space: nowrap;
		font-size: 3.8rem;
		font-weight: 600;
		color: inherit;
		text-decoration: none;
	}
`;

const Collapsable = styled.div`
	display: flex;
`;

const Menu = styled.ul`
	display: flex;
	list-style: none;
`;

const Item = styled.li`

	:not(:last-child){
		margin-right: .5rem;
	};

	a{
		padding: 1rem 1.5rem;
		border-radius: 4px;
		transition: all .2s;

		:link,
		:visited{
			font-size: 1.8rem;
			font-weight: 300;
			text-decoration: none;
			color: #fff;
		};
		
		:hover{
			background-color: rgba(256,256,256, .2);
		};
	}
`;


//------------------------------------------------------------------------------

const Navbar = () => {
	return(
		<Nav>
			<Brand>
				<Name href='#home'>Li</Name>
			</Brand>
			<Toggler>
				<Menu_svg/>
			</Toggler>
			<Collapsable>
				<Menu>
					<Item><a href='#about'>About</a></Item>
					<Item><a href='#skills'>Skills</a></Item>
					<Item><a href='#portfolio'>Portfolio</a></Item>
					<Item><a href='#experiences'>Experiences</a></Item>
					<Item><a href='#outside'>Outside of Work</a></Item>
					<Item><a href='#my_system'>My System</a></Item>
				</Menu>
			</Collapsable>
		</Nav>
	)
}

export default Navbar;