import {
	icons,
	portfolioJPGs,
	experiencesJPGs
} from './assets';

export const GOOGLE_ANALYTICS = 'x UA-140313888-1';

export const SOCIALS = [
	{
		Svg: icons.GitHubSVG,
		link: 'https://github.com/jayli3n'
	},
	{
		Svg: icons.LinkedInSVG,
		link: 'https://github.com/jayli3n'
	},
	{
		Svg: icons.MediumSVG,
		link: 'https://medium.com/@raikohapps'
	},
	{
		Svg: icons.TwitterSVG,
		link: 'https://twitter.com/raikohapps'
	}
];

// Icons are from "./assets" and follows the order of the exported icons array
export const PORTFOLIO = [
	{
		imgPath: portfolioJPGs.trilloJPG,
		icons: [4,5,6,9],
		title: 'Trillo Front End',
		text: 'A simple and clean front-end for a mockup hotel booking website. Has nice animations.',
		liveLink: 'https://jayli3n.github.io/trillo-front-end/',
		sourceLink: 'https://github.com/jayli3n/trillo-front-end',
	},
	{
		imgPath: portfolioJPGs.facialJPG,
		icons: [0,4,2,7,8,9],
		title: 'Facial Recognition Web App',
		text: 'Detects human faces in an input image and put boxes around them. Uses Clarifai API.',
		liveLink: 'https://jayli3n.github.io/facial-recognition-web-app/',
		sourceLink: 'https://github.com/jayli3n/facial-recognition-web-app',
	},
	{
		imgPath: portfolioJPGs.nexterJPG,
		icons: [4,5,6,9],
		title: 'Nexter Real Estate',
		text: 'A mockup real estate website. Made responsive using tons of CSS Grid.',
		liveLink: 'https://jayli3n.github.io/nexter-front-end/',
		sourceLink: 'https://github.com/jayli3n/nexter-front-end',
	},
	{
		imgPath: portfolioJPGs.thewestcoinsJPG,
		icons: [4,5,11],
		title: 'The West Coins',
		text: 'Coin collection E-commerce website for my dear friend. I still manage and maintain it weekly.',
		liveLink: 'https://www.thewestcoins.com/'
	},
	{
		imgPath: portfolioJPGs.starwarsJPG,
		icons: [0,4,2,7,9],
		title: 'Star Wars Database',
		text: 'A fun and light-weight web app to display all the Star Wars data you\'ll ever want! Uses AJAX and SWAPI.',
		liveLink: 'https://jayli3n.github.io/starwars/',
		sourceLink: 'https://github.com/jayli3n/starwars',
	},
	{
		imgPath: portfolioJPGs.jayli3nJPG,
		icons: [0,4,5,2,6,7,9],
		title: 'My Personal Site',
		text: 'It\'s the site you\'re on right now! Designed and built from scratch using React JS.',
		liveLink: 'https://jayli3n.github.io/personal-site/',
		sourceLink: 'https://github.com/jayli3n/personal-site',
	},
	{
		imgPath: portfolioJPGs.natoursJPG,
		icons: [4,5,9],
		title: 'Natours Startup',
		text: 'A mockup landing page for a startup travel agency. Uses old css techniques for responsiveness.',
		liveLink: 'https://jayli3n.github.io/natours-startup/',
		sourceLink: 'https://github.com/jayli3n/natours-startup',
	},
	{
		imgPath: portfolioJPGs.linearGradJPG,
		icons: [4,5,2],
		title: 'Gradient Background Generator',
		text: 'Pick your own or randomly generate color codes for CSS: linear-gradient( ).',
		liveLink: 'https://jayli3n.github.io/linear-background-generator/',
		sourceLink: 'https://github.com/jayli3n/linear-background-generator',
	}
];

// Array of experiences, makes it easy to add or remove in the future
export const EXPERIENCES = [
	{
		logoPath: experiencesJPGs.woodJPG,
		company: 'Wood PLC',
		link: 'https://www.woodplc.com/',
		position: 'Technical Analyst',
		duration: 'Feb 2018 - Present',
		details: [
			'Worked within asset management teams to deliver inspection and turnaround maintenance scopes.',
			'Primarily worked on database management and data manipulation as well as querying SQL data to create progress reports.',
			'Developed scripts and programs for the team to reduce complexity and time of repetitive tasks.',
			'I’m grateful for the time I spent with different clients alongside brilliant engineers; whose work gave me a glimpse into the challenges and rewards of an engineer’s life.'
		]
	},
	{
		logoPath: experiencesJPGs.ultraveJPG,
		company: 'UltraVe',
		link: 'https://www.ultrave.com/',
		position: 'Founder',
		duration: 'Sep 2018 - Present',
		details: [
			'UltraVe is a social media community and online clothing company that promotes healthy eating and a cruelty-free lifestyle.',
			'I have learned the importance of online marketing and online presence that comes from search engine optimization (SEO) and ongoing community building.',
			'This small project has taught me how to work on tasks independently: site creation, product sponsoring, graphic designs, customer support etc.',
			'As a way to give back, a portion of the proceeds go to animal rescue and shelters.'
		]
	},
	{
		logoPath: experiencesJPGs.tutorJPG,
		company: 'Private Tutor',
		link: '#experiences',
		duration: 'Dec 2015 - Sep 2018',
		details: [
			'Graduated school with a body of knowledge that I wanted to give back to the local community.',
			'Focused on 12th grade Mathematics, Physics and Chemistry.',
			'By the end of the school year, my students achieved grade A from lower grades; 2 of which earned a Dux Award (Top ranked student of the year group).',
			'1000+ hours of teaching experience.'
		]
	}
];
