import React, { Component } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import {media} from '../../utils/mediaQueriesBuilder';
import Scrollspy from 'react-scrollspy'
import smoothScroll from '../../utils/smoothScroll';
import {navReveal} from '../../atoms/keyframes';
import {
	color_grey_6,
	color_primary
} from '../../atoms/variables';
import {ReactComponent as MenuSvg} from '../../images/icons/menu.svg';

// once user scrolls pass hero section, navbar sticks at top and is blue
const Nav = styled.nav`
	position: ${props => props.isBlueNav ? 'fixed' : 'absolute'};
	left: 0;
	right: 0;
	z-index: 999;
	color: #fff;
	background-color: ${props => props.isBlueNav ? color_primary : 'rgba(255,255,255,.02)'};
	box-shadow: ${props => props.isBlueNav ? '0 .1rem .15rem rgba(0,0,0,.3)' : '0 .1rem .15rem rgba(0,0,0,.1)'};
	animation: ${props => props.isBlueNav ? navReveal : 'none'} .3s ease-out 0s;
`;

// nav becomes collapsible via toggle button if screen is small
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
			background-color: ${props => props.isBlueNav ? color_primary : 'rgba(255,255,255,.1)'};
			box-shadow: ${props => props.isBlueNav ? '0 .1rem .15rem rgba(0,0,0,.3)' : '0 .1rem .15rem rgba(0,0,0,.1)'};
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
			background-color: rgba(255,255,255, .15);
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
	transition: all 1s;
	border: none;
	cursor: pointer;
	outline: none;

	:hover{
		fill: ${color_grey_6};
	};

	${media.sizeIII`
		display: block;
	`}
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
			background-color: rgba(255,255,255, .2);
		};

		:active{
			background-color: rgba(255,255,255, .15);
		};

		${media.sizeIII`
			width: 100%;
			text-align: left;
		`}
	}
`;

// each nav button activates scrollspy onClick and scrolls to element with the provided id
const NavButton = ({className, refID, text}) => {
	return(
		<button onClick={() => {
			smoothScroll(refID);
		}}>{text}</button>
	)
}

//------------------------------------------------------------------------------

class Navbar extends Component {
	constructor(){
		super();
		this.state = {
			isBlueNav: false,
			isToggleOn: false
		}

		// scroll listener to see if user has scrolled passes hero section so that the nav can stick to top
		window.onscroll = () => {
			this.toggleNav();
		};
	}

	toggleCollapsible = (show) => {
		if(show && this.state.isToggleOn){
			this.setState({
				isToggleOn: !show
			});
		}else{
			this.setState({
				isToggleOn: show
			});
		}
	}

	// 70 is an offset to make scrollspy activate early
	toggleNav = () => {
		const HeroElement = document.getElementById("home");
		this.setState({
			isBlueNav: (HeroElement.getBoundingClientRect().bottom <= 45)
		});
	}

	render(){
		return(
			<Nav isBlueNav={this.state.isBlueNav}>
				<Wrapper isBlueNav={this.state.isBlueNav}>
					<Brand>
						<Name onClick={() => {
							smoothScroll('home');
						}}>Li</Name>
					</Brand>
					<Toggler onClick={() => {
							this.toggleCollapsible(true)
						}} onBlur={() => {
							this.toggleCollapsible(false)
						}}>
						<MenuSvg/>
					</Toggler>
					<div className={this.state.isToggleOn ? classNames('collapsible', 'collapsible--toggle') : 'collapsible'}>
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