import {
	icons,
	portfolioJPGs,
	experiencesJPGs,
	outsidePNGs
} from './assets';

export const GOOGLE_ANALYTICS = 'UA-140313888-1';

export const SOCIALS = [
	{
		Svg: icons.GitHubSVG,
		link: 'https://github.com/jayli3n'
	},
	{
		Svg: icons.LinkedInSVG,
		link: 'https://www.linkedin.com/in/jayli3n/'
	},
	{
		Svg: icons.InstagramSVG,
		link: 'https://instagram.com/james2li'
	}
];

// Icons are from "./assets" and follows the order of the exported icons array
export const PORTFOLIO = [
	{
		imgPath: portfolioJPGs.raikohappsJPG,
		icons: [0,1,2,3,4,5,6,9],
		title: 'Raikoh Apps',
		text: 'A fun company that develops apps, games and websites. Built from scratch.',
		liveLink: 'https://raikohapps.com',
	},
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
		icons: [0,2,3,4,5,6,9],
		title: 'Facial Recognition Web App',
		text: 'Detects human faces in an input image and put boxes around them. Uses Clarifai API.',
		liveLink: 'https://jayli3n.github.io/facial-recognition-web-app/',
		sourceLink: 'https://github.com/jayli3n/facial-recognition-web-app',
	},
	{
		imgPath: portfolioJPGs.nexterJPG,
		icons: [4,5,6,9],
		title: 'Nexter Real Estate',
		text: 'A mockup real estate website. Made responsive using of CSS Grid.',
		liveLink: 'https://jayli3n.github.io/nexter-front-end/',
		sourceLink: 'https://github.com/jayli3n/nexter-front-end',
	},
	{
		imgPath: portfolioJPGs.thewestcoinsJPG,
		icons: [4,5,7],
		title: 'The West Coins',
		text: 'Coin collection E-commerce website for my dear friend. I still manage and maintain it weekly.',
		liveLink: 'https://www.thewestcoins.com/'
	},
	{
		imgPath: portfolioJPGs.starwarsJPG,
		icons: [0,2,4,5,9],
		title: 'Star Wars Database',
		text: 'A fun and light-weight web app to display all the Star Wars data you\'ll ever want! Uses AJAX and SWAPI.',
		liveLink: 'https://jayli3n.github.io/starwars/',
		sourceLink: 'https://github.com/jayli3n/starwars',
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
		icons: [2,4,5,9],
		title: 'Gradient Background Generator',
		text: 'Pick your own or randomly generate color codes for CSS linear gradient.',
		liveLink: 'https://jayli3n.github.io/linear-background-generator/',
		sourceLink: 'https://github.com/jayli3n/linear-background-generator',
	}
];

// Array of experiences, makes it easy to add or remove in the future
export const EXPERIENCES = [
	{
		logoPath: experiencesJPGs.calytrixJPG,
		company: 'Calytrix Technologies',
		link: 'https://www.calytrix.com/',
		position: 'Software Engineer',
		duration: 'Jan 2023 - Present',
		details: [
			'Checkout my LinkedIn profile for more detail',
			'TODO'
		]
	},
	{
		logoPath: experiencesJPGs.ninjaJPG,
		company: 'Ninja Software',
		link: 'https://www.linkedin.com/company/ninjasoftware/',
		position: 'Software Engineer',
		duration: 'Dec 2021 - Jan 2023',
		details: [
			'Lead front-end engineer for Supremacy Game (https://play.supremacy.game): a 24/7 live battle stream of mechs battling and players dropping abilities, think Hunger Games meet Mechs',
			'Full stack developer utilizing ReactJS, GoLang, and PostgreSQL',
			'Implemented features using PixiJS, ThreeJS, Web3',
			'Communicate data with WebSockets and REST API\'s',
			'Write tests and optimize front-end for best performance and SEO',
			'Features include: in-game minimap, inventory page, battle lobbies, game pass, marketplace, quests etc.',
			'Built custom in-house WebSocket client to handle rapid game data',
			'Mentored and trained junior developers in best practices for clean and performance UI/UX',
			'Extremely agile work environment and highly collaborative with other team members'
		]
	},
	{
		logoPath: experiencesJPGs.chevronJPG,
		company: 'Chevron',
		link: 'https://australia.chevron.com/',
		position: 'Senior Technical Analyst',
		duration: 'Apr 2019 - Present',
		details: [
			'Sole developer within the ABU Fixed Equipment Integrity Team (FEI) who are responsible for regular fixed equipment inspections and Turnarounds for Gorgon Gas Plant & Wheatstone Gas Plant ($90+ billion worth of assets)',
			'Developed in-house solutions with Microsoft Power Platform',
			'Microsoft Access DB front end + SQL Server + Power Automate',
			'Power Bi KPI dashboards for the team and manager',
			'100+ users within the company using the solutions I\'ve built'
		]
	}
];

export const EXTRACURRICULAR = [
	{
		img: outsidePNGs.litPNG,
		title: 'Friends',
		text: 'I love to spend time with my friends for occasional movie marathons, board games and other fun stuff.'
	},
	{
		img: outsidePNGs.workoutPNG,
		title: 'Workout',
		text: 'The little voice inside my head won\'t let me sleep if I don\'t get at least a three workouts sessions a week.'
	},
	{
		img: outsidePNGs.racketPNG,
		title: 'Sports',
		text: 'Can\'t live without racket sports, especially badminton. Attempted a tournament, did not go well tho.'
	},
	{
		img: outsidePNGs.bookPNG,
		title: 'Learning',
		text: 'Always keeping up-to-date with the latest tech news, struggling to keep up with all the new JS frameworks man.'
	}
];

export const MY_SYSTEM = [
	{
		text: 'be humble',
		link: 'https://www.franksonnenbergonline.com/blog/be-humble-dont-let-success-go-to-your-head/'
	},
	{
		text: 'be respectful',
		link: 'https://www.azquotes.com/picture-quotes/quote-everyone-has-something-to-teach-you-if-you-are-humble-enough-to-learn-mark-driscoll-81-13-11.jpg'
	},
	{
		text: 'always learning',
		link: 'https://www.entrepreneur.com/article/300360/'
	},
	{
		text: 'enjoy the ride!',
		link: 'https://guardianlv.com/2014/04/life-is-a-journey-buckle-up-and-enjoy-the-ride/'
	}
];
