import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {
	color_grey_1
} from '../base/variables'

import font_bold from '../fonts/StratumNo1 Bold.ttf';
import font_heavy from '../fonts/StratumNo1 Heavy.ttf';
import font_light from '../fonts/StratumNo1 Light.ttf';
import font_medium from '../fonts/StratumNo1 Medium.ttf';
import font_regular from '../fonts/StratumNo1 Regular.ttf';
import font_thin from '../fonts/StratumNo1 Thin.ttf';

import Hero from '../components/hero/hero';


const GlobalStyle = createGlobalStyle`
	@font-face {
	    font-family: "Stratum";
	    src: url('${font_bold}');
	    font-weight: 500;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_heavy}');
	    font-weight: 600;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_light}');
	    font-weight: 200;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_medium}');
	    font-weight: 400;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_regular}');
	    font-weight: 300;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_thin}');
	    font-weight: 100;
	}

	*,
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-weight: inherit;
	}

	html{
		//so that 1rem = 10px since default was 1rem = 16px. 10px/16px = 62.5%
		font-size: 62.5%;
		color: ${color_grey_1};
		box-sizing: border-box;
		font-family: "Stratum", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 300;
		line-height: 1;
	}

	body{
		min-height: 150vh;
	}
`;

const Title = styled.p`
	font-size: 20rem;
`;

class App extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<>
				<GlobalStyle />
				<Hero></Hero>
			</>
		)
	}
}

export default App;
