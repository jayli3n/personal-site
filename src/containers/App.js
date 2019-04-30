import React, {Component}from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import font from '../fonts/StratumNo1 Medium.ttf';


const GlobalStyle = createGlobalStyle`
	@font-face {
	    font-family: Stratum;
	    src: url('${font}');
	}

	*,
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html{
		//so that 1rem = 10px since default was 1rem = 16px. 10px/16px = 62.5%
		font-size: 62.5%;
		box-sizing: border-box;
		font-family: Stratum, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		color: red;
		line-height: 1.6;
	}
`;

const Title = styled.h1`
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
				<Title>Hello World</Title>
			</>
		)
	}
}

export default App;
