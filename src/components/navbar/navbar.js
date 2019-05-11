import React, { Component } from 'react';
import classNames from 'classnames';
import styled, {css} from 'styled-components';
import {media} from '../../utils/mediaQueriesBuilder';
import Scrollspy from 'react-scrollspy'
import smoothScroll from '../../utils/smoothScroll';
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
	color_grey_5,
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
	z-index: 999;
	color: #fff;
	background-color: ${color_primary};
	box-shadow: 0 .1rem .15rem rgba(0,0,0,.3);
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 1.6rem 3rem;

	.collapsible{
		${media.sizeIII`
			position: absolute;
			display: inline;
			top: 100%;
			right: 0;
			margin: .5rem;
			padding: 1rem;
			z-index: 9999;
			background-color: ${color_primary};
			box-shadow: 0 1px 2px rgba(0,0,0,.3);
			border-radius: 3px;
			transition: all .2s;
			visibility: hidden;
			opacity: 0;
		`}

		&--toggle{
			visibility: visible;
			opacity: 1;
		}
	}

	.scrollspy{
		position: relative;
		display: flex;
		list-style: none;

		${media.sizeIII`
			flex-direction: column;
		`}

		&--item-active{
			border-radius: 4px;
			background-color: rgba(256,256,256, .15);
		}
	}
`;

const Brand = styled.div`
	height: 100%;
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

	${media.sizeIII
		`display: block;`
	}
`;

const Item = styled.li`

	:not(:last-child){
		margin-right: .5rem;
	};

	${media.sizeIII`
		width: 100%;
		:not(:last-child){
			margin-bottom: .38rem;
		};
	`}

	button{
		font-family: inherit;
		font-size: 1.8rem;
		font-weight: 300;
		white-space: nowrap;
		padding: 1rem 1.5rem;
		background: transparent;
		color: inherit;
		border: none;
		cursor: pointer;
		outline: none;
		border-radius: 4px;
		transition: all .2s;

		:hover{
			background-color: rgba(256,256,256, .2);
		};

		:active{
			background-color: rgba(256,256,256, .15);
		};

		${media.sizeIII`
			width: 100%;
			text-align: left;
		`}
	}
`;

const NavButton = ({className, refID, text}) => {
	return(
		<button onClick={() => {
			smoothScroll(refID);
		}}>{text}</button>
	)
}

window.onscroll = function() {
	const NavElement = document.getElementById("navbar");
	const HeroElement = document.getElementById("home");
	if (HeroElement.getBoundingClientRect().bottom <= 0) {
		NavElement.classList.add("scroll");
	}else {
		NavElement.classList.remove("scroll");
	}
};

//------------------------------------------------------------------------------

class Navbar extends Component {
	constructor(){
		super();
		this.state = {
			toggleOn: false
		}
	}

	toggleNav = (show) => {
		if(show && this.state.toggleOn){
			this.setState({
				toggleOn: !show
			});
		}else{
			this.setState({
				toggleOn: show
			});
		}
	}

	render(){
		return(
			<Nav id='navbar'>
				<Wrapper>
					<Brand>
						<Name onClick={() => {
							smoothScroll('home');
						}}>Li</Name>
					</Brand>
					<Toggler onClick={() => {
							this.toggleNav(true)
						}} onBlur={() => {
							this.toggleNav(false)
						}}>
						<Menu_svg/>
					</Toggler>
					<div className={this.state.toggleOn ? classNames('collapsible', 'collapsible--toggle') : 'collapsible'}>
						<Scrollspy
							className={'scrollspy'}
				    		items={ ['home', 'about', 'skills', 'portfolio', 'experiences', 'outside', 'mySystem'] }
				    		currentClassName='scrollspy--item-active'
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
					</div>
				</Wrapper>
			</Nav>
		)
	}
}

export default Navbar;