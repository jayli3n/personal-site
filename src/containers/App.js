import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import ScrollReveal from 'scrollreveal';
import {media} from '../utils/mediaQueriesBuilder';
import {
	color_hero_1,
	color_hero_2,
	color_grey_1,
	color_grey_7,
	color_primary,
} from '../atoms/variables'

import font_bold from '../fonts/StratumNo1 Bold.ttf';
import font_heavy from '../fonts/StratumNo1 Heavy.ttf';
import font_light from '../fonts/StratumNo1 Light.ttf';
import font_medium from '../fonts/StratumNo1 Medium.ttf';
import font_regular from '../fonts/StratumNo1 Regular.ttf';
import font_thin from '../fonts/StratumNo1 Thin.ttf';

import Particles from 'react-particles-js';
import {MeteorComponent} from '../utils/meteorShower'
import particlesOptions from './particlesjs-config';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import Profile from '../components/profile/profile';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experiences from '../components/experiences/experiences';
import Extracurricular from '../components/extracurricular/extracurricular';
import MySystem from '../components/mySystem/mySystem';
import Footer from '../components/footer/footer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-140313888-1');

const sr = ScrollReveal();

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

	::selection{
		background-color: ${color_primary};
		color: #fff;
	}

	html{
		//so that 1rem = 10px since default was 1rem = 16px. 10px/16px = 62.5%
		font-size: 62.5%;
		color: ${color_grey_1};
		box-sizing: border-box;
		font-family: "Stratum", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 300;
		line-height: 1;

		${media.sizeI`
			font-size: 57%;
		`}

		${media.sizeII`
			font-size: 50.5%;
		`}
	}

	body{
		min-width: 320px;
	}

	.particles-js{
		background-color: ${color_hero_1};
		background-image: linear-gradient(to bottom, ${color_hero_1}, ${color_hero_2});
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -99;
	}
`;

const Section = styled.section`
	background-color: ${props => props.transparent ? `transparent` : color_grey_7};

	:nth-of-type(2){
		padding-top: 8rem;
	};

	:nth-last-of-type(2){
		padding-bottom: 10rem;
	};
`;

class App extends Component {
	componentDidMount() {
	    const config = {
	      origin: 'top',
	      distance: '20px',
	      duration: 450,
	      delay: 200,
	      scale: 1,
	      opacity: 0,
	      easing: 'ease',
	      reset: true
	    };

	    sr.reveal('.scrollreveal', config);
	    ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render(){
		return(
			<>
				<GlobalStyle/>
					<Particles className='particles-js' params={particlesOptions}/>
					<MeteorComponent num={10}/>
					<Navbar/>
					<Section id='home' transparent><Hero/></Section>
					<Section id='about'><Profile/></Section>
					<Section id='skills'><Technologies/></Section>
					<Section id='portfolio'><Portfolio/></Section>
					<Section id='experiences'><Experiences/></Section>
					<Section id='outside'><Extracurricular/></Section>
					<Section id='mySystem'><MySystem/></Section>
					<Section id ='footer' transparent><Footer/></Section>
			</>
		)
	}
}

export default App;
