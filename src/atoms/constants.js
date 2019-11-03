import styled from 'styled-components';

// ----------------------------------

export const COLORS = {
	PRIMARY: '#5A91E8',
	PRIMARY_LIGHT: '#78A5EC',
	PRIMARY_DARK: '#4066A3',
	WHITE: '#FFFFFF',
	CONTAINER_BG: '#FFFFFF',
	HIGHLIGHT_BG: '#F7A5A5',
	HIGHLIGHT_TEXT: '#FFFFFF',

	GREY_1: '#383838',
	GREY_2: '#606060',
	GREY_3: '#999999',
	GREY_4: '#AAAAAA',
	GREY_5: '#BBBBBB',
	GREY_6: '#DFE1E5',
	GREY_7: '#F4F2F2',
	GREY_8: '#FAF9F9',
};

// ----------------------------------

export const COMMON_STYLES = {
	BORDER_RADIUS: '4px',
	BORDER: '.5px solid rgba(50,50,93,.10)',
	NAVBAR_SHADOW: '0 .1rem .15rem #00000030',
	BOX_SHADOW: '0 0 0 0.5px rgba(50,50,93,.12), 0 2px 5px 0 rgba(50,50,93,.07), 0 3px 9px 0 rgba(50,50,93,.03), 0 1px 1.5px 0 rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.03)',
	BOX_SHADOW_HOVER: '0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.12), 0 3px 9px 0 rgba(50,50,93,.08), 0 1px 1.5px 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.08)'
};

// ----------------------------------

export const SECTION_WIDTHS = {
	MIN_WIDTH: '30rem',
	MAX_WIDTH: '100rem'
};

// ----------------------------------

export const SMOOTH_SCROLL_DURATION = 2000;

// ----------------------------------

// Configuration for scrollreveal
export const SCROLL_REVEAL_CONFIG = {
	origin: 'top',
	distance: '20px',
	duration: 450,
	delay: 200,
	scale: 1,
	opacity: 0,
	easing: 'ease',
	reset: true
};

// ----------------------------------

// Media breakpoints
export const SIZES = {
	sizeI: 1080,
	sizeII: 800,
	sizeIII: 638,
	sizeIV: 900,
	sizeV: 550,
	sizeVI: 425
};

// ----------------------------------

export const TYPOGRAPHY = {
	H1: styled.h1`
		font-size: 4.7rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 600};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	H2: styled.h2`
		font-size: 4.2rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 600};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	H3: styled.h3`
		font-size: 3.7rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 500};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	H4: styled.h4`
		font-size: 3.2rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 400};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	H5: styled.h5`
		font-size: 2.9rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 400};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	H6: styled.h6`
		font-size: 2.3rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 300};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_1};
	`,
	P: styled.p`
		font-size: 1.9rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 300};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_2};
	`,
	S1: styled.p`
		font-size: 1.6rem;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 300};
		text-align: ${props => props.align || 'left'};
		color: ${props => props.color || COLORS.GREY_2};
	`,
	Span: styled.span`
		font-size: inherit;
		letter-spacing: inherit;
		font-family: ${props => props.fontFamily || 'Stratum'};
		line-height: ${props => props.lineHeight || 'inherit'};
		font-weight: ${props => props.weight || 'inherit'};
		text-align: ${props => props.align || 'inherit'};
		color: ${props => props.color || 'inherit'};
	`
};
