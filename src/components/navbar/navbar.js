import React from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy'

import smoothScroll from '../../utils/smoothScroll';
import './navbar.css'
import App from '../../containers/App';
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
	outline: none;

	:hover{
		fill: ${color_grey_6};
	};
`;

const Brand = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const Name = styled.button`
	font-family: inherit;
	white-space: nowrap;
	font-size: 3.8rem;
	font-weight: 600;
	color: inherit;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;
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

	button{
		font-family: inherit;
		font-size: 1.8rem;
		font-weight: 300;
		white-space: nowrap;
		padding: 1rem 1.5rem;
		border-radius: 4px;
		transition: all .2s;
		color: inherit;
		background: transparent;
		border: none;
		cursor: pointer;
		outline: none;
		
		:hover{
			background-color: rgba(256,256,256, .2);
		};

		:active{
			background-color: rgba(256,256,256, .15);
		};
	}
`;


const NavButton = ({className, refID, text}) => {
	return(
		<button onClick={() => {
			smoothScroll(refID);
		}}>{text}</button>
	)
}

//------------------------------------------------------------------------------

const Navbar = () => {
	return(
		<Nav>
			<Brand>
				<Name onClick={() => {
					smoothScroll('home');
				}}>Li</Name>
			</Brand>
			<Toggler>
				<Menu_svg/>
			</Toggler>
			<Collapsable>
				<Scrollspy
					componentTag={Menu}
		    		items={ ['home', 'about', 'skills', 'portfolio', 'experiences', 'outside', 'mySystem'] }
		    		currentClassName="scrollspy--active"
		    		offset={ -250 }
				    >
				    <li></li>
				    <Item><NavButton refID='about' text='About'/></Item>
				    <Item><NavButton refID='skills' text='Skills'/></Item>
				    <Item><NavButton refID='portfolio' text='Portfolio'/></Item>
				    <Item><NavButton refID='experiences' text='Experiences'/></Item>
				    <Item><NavButton refID='outside' text='Outside of Work'/></Item>
				    <Item><NavButton refID='mySystem' text='My System'/></Item>
				</Scrollspy>
			</Collapsable>
		</Nav>
	)
}

export default Navbar;