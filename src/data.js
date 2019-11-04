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
		text: 'Pick your own or randomly generate color codes for CSS: linear-gradient( ).',
		liveLink: 'https://jayli3n.github.io/linear-background-generator/',
		sourceLink: 'https://github.com/jayli3n/linear-background-generator',
	}
];

// Array of experiences, makes it easy to add or remove in the future
export const EXPERIENCES = [
	{
		logoPath: experiencesJPGs.raikohappsLogoJPG,
		company: 'Raikoh Apps',
		link: 'https://raikohapps.com/',
		position: 'Founder',
		duration: 'Oct 2019 - Present',
		details: [
			'Raikoh Apps is an app, game and website development project.',
			'I use it as a creative playground to release small and fun projects to the world.',
			'This project allows me to learn about the indie app and game development industries.',
			'One mobile app has been released and more to come!'
		]
	},
	{
		logoPath: experiencesJPGs.woodJPG,
		company: 'Wood PLC',
		link: 'https://www.woodplc.com/',
		position: 'Technical Analyst',
		duration: 'Feb 2018 - Present',
		details: [
			'Worked within asset management and inspection teams to deliver inspection and turnaround maintenance scopes.',
			'Primarily worked on database management and data manipulation.',
			'Developed scripts and programs for the team to reduce complexity and time of tasks.',
			'I’m grateful for the time I spent with different clients alongside brilliant engineers; whose work gave me a glimpse into the challenges and rewards of an engineer’s life.'
		]
	},
	{
		logoPath: experiencesJPGs.ultraveJPG,
		company: 'UltraVe',
		link: 'https://instagram.com/ultraveofficial',
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
		duration: 'Dec 2015 - Sep 2018',
		details: [
			'Graduated school with a body of knowledge that I wanted to give back to the local community.',
			'Focused on 12th grade Mathematics, Physics and Chemistry.',
			'By the end of the school year, my students achieved grade A from lower grades; 2 of which earned a Dux Award (Top ranked student of their year group).',
			'1000+ hours of teaching experience.'
		]
	}
];

export const EXTRACURRICULAR = [
	{
		img: outsidePNGs.litPNG,
		title: 'Friends',
		text: 'I find time to spend with my friends for occasional movie marathons, board games and some other stuff.'
	},
	{
		img: outsidePNGs.workoutPNG,
		title: 'Workout',
		text: 'Incredibly important to keep my body moving especially when I working in front of a desk all day.'
	},
	{
		img: outsidePNGs.racketPNG,
		title: 'Sports',
		text: 'I enjoy racket sports such as tennis and badminton. I play badminton at a local club and attempted a few tournaments, did not go well.'
	},
	{
		img: outsidePNGs.bookPNG,
		title: 'Learning',
		text: 'The rest of my time are spent discovering new ideas and picking up skills from various online platforms, podcasts and audiobooks.'
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
