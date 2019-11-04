import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy'
import {
	media,
	smoothScroll
} from '../util';
import { icons } from '../assets';
import {
	COLORS,
	NAV_REVEAL,
	TYPOGRAPHY,
	COMMON_STYLES
} from '../atoms';


// Each nav button activates scrollspy onClick and scrolls to element with the provided id
const NavButton = ({ refID, text }) => (
	<StyledButton onClick={() => smoothScroll(refID)}>
		<TYPOGRAPHY.P color={COLORS.WHITE}>{text}</TYPOGRAPHY.P>
	</StyledButton>
);

export class NavBar extends Component {
	state = {
		isBlueNav: false,
		isMenuVisible: false
	}

	componentDidMount() {
		// Scroll listener to see if user has scrolled passes hero section so that the nav can stick to top
		window.onscroll = () => this.toggleNav();
	}

	toggleCollapsible = (show) => {
		if (show && this.state.isMenuVisible) {
			this.setState({ isMenuVisible: !show });
		} else {
			this.setState({ isMenuVisible: show });
		}
	}

	// 45 is an arbitrary offset to make scrollspy activate early
	toggleNav = () => {
		const HeroElement = document.getElementById('home');
		this.setState({ isBlueNav: HeroElement.getBoundingClientRect().bottom <= 45 });
	}

	renderCollapsiblesDiv = () => {
		const { isBlueNav, isMenuVisible } = this.state;
		return (
			<CollapsiblesDiv isBlueNav={isBlueNav} isMenuVisible={isMenuVisible}>
				<Scrollspy
		    		offset={-250}
					className='scrollspy'
		    		currentClassName='scrollspy--item-active'
		    		items={['home', 'about', 'skills', 'portfolio',
		    			'experiences', 'outside', 'mysystem']}
				>
				    <li></li>
				    <ListItem><NavButton refID='about' text='About'/></ListItem>
				    <ListItem><NavButton refID='skills' text='Skills'/></ListItem>
				    <ListItem><NavButton refID='portfolio' text='Portfolio'/></ListItem>
				    <ListItem><NavButton refID='experiences' text='Experiences'/></ListItem>
				    <ListItem><NavButton refID='outside' text='Outside of Work'/></ListItem>
				    <ListItem><NavButton refID='mysystem' text='My System'/></ListItem>
				</Scrollspy>
			</CollapsiblesDiv>
		);
	};

	render() {
		const { isBlueNav } = this.state;
		return (
			<Nav isBlueNav={isBlueNav}>
				<InnerDiv isBlueNav={isBlueNav}>
					<NameButton onClick={() => smoothScroll('home')}>
						<TYPOGRAPHY.H2 color={COLORS.WHITE}>Li</TYPOGRAPHY.H2>
					</NameButton>
					<ToggleButton
						onClick={() => this.toggleCollapsible(true)}
						onBlur={() => this.toggleCollapsible(false)}
					>
						<icons.MenuSVG />
					</ToggleButton>
					{this.renderCollapsiblesDiv()}
				</InnerDiv>
			</Nav>
		)
	}
}

// Once user scrolls pass hero section, navbar sticks at top and is blue
const Nav = styled.nav`
	position: ${props => props.isBlueNav ? 'fixed' : 'absolute'};
	left: 0;
	right: 0;
	z-index: 999;
	padding: 1rem 3rem;
	color: ${COLORS.WHITE};
	box-shadow: ${COMMON_STYLES.NAVBAR_SHADOW};
	background-color: ${props => props.isBlueNav ? COLORS.PRIMARY : `${COLORS.WHITE}03`};
	animation: ${props => props.isBlueNav ? NAV_REVEAL : 'none'} .3s ease-out 0s;
`;

// Nav becomes collapsible via toggle button if screen is small
const InnerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.scrollspy{
		position: relative;
		display: flex;
		list-style: none;

		&--item-active{
			border-radius: ${COMMON_STYLES.BORDER_RADIUS};
			background-color: ${`${COLORS.WHITE}15`};
		}

		${media.sizeII`
			flex-direction: column;
		`}
	}
`;

const NameButton = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	background: transparent;
`;

const ToggleButton = styled.button`
	display: none;
	position: relative;
	height: 3.5rem;
	width: 3.5rem;
	border: none;
	cursor: pointer;
	outline: none;
	fill: ${COLORS.WHITE};
	background-color: transparent;
	backface-visibility: hidden;
	transition: all 1s;

	:hover{
		fill: ${COLORS.GREY_6};
	};

	${media.sizeII`
		display: block;
	`}
`;

// Nav becomes collapsible via toggle button if screen is small
const CollapsiblesDiv = styled.div`
	${media.sizeII`
		position: absolute;
		display: inline;
		top: 100%;
		right: 0;
		z-index: 9999;
		margin: .25rem .5rem;
		padding: 1.3rem 1.8rem;
		transition: all .2s;
		border-radius: ${COMMON_STYLES.BORDER_RADIUS};
		background-color: ${props => props.isBlueNav ? COLORS.PRIMARY : `${COLORS.WHITE}15`};
		box-shadow: ${COMMON_STYLES.BOX_SHADOW_HOVER};
		opacity: ${props => props.isMenuVisible ? 1 : 0};
		visibility: ${props => props.isMenuVisible ? 'visible' : 'hidden'};
	`}
`;

const ListItem = styled.li`
	:not(:last-child){
		margin-right: .5rem;
	};

	${media.sizeII`
		width: 100%;
		margin-right: 0;

		:not(:last-child) {
			margin-bottom: .38rem;
		};
	`}
`;

const StyledButton = styled.button`
	padding: 1rem 1.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: ${COMMON_STYLES.BORDER_RADIUS};
	transition: all .2s;

	:hover{
		background-color: ${`${COLORS.WHITE}26`};
	};

	:active{
		background-color: ${`${COLORS.WHITE}15`};
	};

	${media.sizeII`
		width: 100%;
		padding: 1.5rem 2.2rem;
	`}
`;
