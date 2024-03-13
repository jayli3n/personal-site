// Import fonts and its variants
import FONT_HEAVY from './fonts/Raleway Heavy.ttf';
import FONT_BOLD from './fonts/Raleway Bold.ttf';
import FONT_MEDIUM from './fonts/Raleway Medium.ttf';
import FONT_REGULAR from './fonts/Raleway Regular.ttf';
import FONT_LIGHT from './fonts/Raleway Light.ttf';
import FONT_THIN from './fonts/Raleway Thin.ttf';

// Import images
import avatarJPG from './jayli3n-avatar.jpg';
import tutorJPG from './experiences/jayli3n-tutor.jpg';
import ultraveJPG from './experiences/jayli3n-ultrave.jpg';
import woodJPG from './experiences/jayli3n-woodplc.jpg';
import raikohappsLogoJPG from './experiences/jayli3n-raikohapps.jpg';
import chevronJPG from './experiences/jayli3n-chevron.jpg';
import calytrixJPG from './experiences/jayli3n-calytrix.jpg';
import ninjaJPG from './experiences/jayli3n-ninja.jpg';
import bookPNG from './outside/jayli3n-book.png';
import litPNG from './outside/jayli3n-lit.png';
import racketPNG from './outside/jayli3n-racket.png';
import workoutPNG from './outside/jayli3n-workout.png';
import facialJPG from './portfolio/jayli3n-facial-recognition-web-app_snapshot.jpg';
import linearGradJPG from './portfolio/jayli3n-linear-gradient_snapshot.jpg';
import natoursJPG from './portfolio/jayli3n-natours-tour-startup_snapshot.jpg';
import nexterJPG from './portfolio/jayli3n-nexter-real-estate_snapshot.jpg';
import starwarsJPG from './portfolio/jayli3n-starwars-api_snapshot.jpg';
import thewestcoinsJPG from './portfolio/jayli3n-the-west-coins_snapshot.jpg';
import trilloJPG from './portfolio/jayli3n-trillo-hotel-booking_snapshot.jpg';
import raikohappsJPG from './portfolio/jayli3n-raikoh-apps-snapshot copy.jpg';

// Import vectors
import { ReactComponent as TranslateSVG } from './icons/jayli3n-google_translate.svg';
import { ReactComponent as GitHubSVG } from './icons/jayli3n-github.svg';
import { ReactComponent as GmailSVG } from './icons/jayli3n-gmail.svg';
import { ReactComponent as MenuSVG } from './icons/jayli3n-menu.svg';
import { ReactComponent as PinSVG } from './icons/jayli3n-pin.svg';
import { ReactComponent as MediumSVG } from './icons/jayli3n-medium.svg';
import { ReactComponent as TwitterSVG } from './icons/jayli3n-twitter.svg';
import { ReactComponent as YouTubeSVG } from './icons/jayli3n-youtube.svg';
import { ReactComponent as FacebookSVG } from './icons/jayli3n-facebook.svg';
import { ReactComponent as InstagramSVG } from './icons/jayli3n-instagram.svg';
import { ReactComponent as DiscordSVG } from './icons/jayli3n-discord.svg';
import { ReactComponent as LinkedInSVG } from './icons/jayli3n-linkedin.svg';

import { ReactComponent as AndroidSVG } from './technologies/jayli3n-android.svg';
import { ReactComponent as BootstrapSVG } from './technologies/jayli3n-bootstrap.svg';
import { ReactComponent as CSS3SVG } from './technologies/jayli3n-css3.svg';
import { ReactComponent as FirebaseSVG } from './technologies/jayli3n-firebase.svg';
import { ReactComponent as GitSVG } from './technologies/jayli3n-git.svg';
import { ReactComponent as HTML5SVG } from './technologies/jayli3n-html5.svg';
import { ReactComponent as JavaScriptSVG } from './technologies/jayli3n-javascript.svg';
import { ReactComponent as AccessSVG } from './technologies/jayli3n-microsoftaccess.svg';
import { ReactComponent as NodeSVG } from './technologies/jayli3n-node-dot-js.svg';
import { ReactComponent as PostgreSQLSVG } from './technologies/jayli3n-postgresql.svg';
import { ReactComponent as ReactSVG } from './technologies/jayli3n-react.svg';
import { ReactComponent as ReduxSVG } from './technologies/jayli3n-redux.svg';
import { ReactComponent as SassSVG } from './technologies/jayli3n-sass.svg';
import { ReactComponent as ShopifySVG } from './technologies/jayli3n-shopify.svg';
import { ReactComponent as WordPressSVG } from './technologies/jayli3n-wordpress.svg';
import { ReactComponent as PowerBISVG } from './technologies/jayli3n-power-bi.svg';

// ------------------------------------------

export const fonts = {
	FONT_HEAVY,
	FONT_BOLD,
	FONT_MEDIUM,
	FONT_REGULAR,
	FONT_LIGHT,
	FONT_THIN
}

export { avatarJPG };

export const experiencesJPGs = {
	tutorJPG,
	ultraveJPG,
	woodJPG,
	raikohappsLogoJPG,
	chevronJPG,
	calytrixJPG,
	ninjaJPG
};

export const outsidePNGs = {
	bookPNG,
	litPNG,
	racketPNG,
	workoutPNG
};

export const portfolioJPGs = {
	facialJPG,
	linearGradJPG,
	natoursJPG,
	nexterJPG,
	starwarsJPG,
	thewestcoinsJPG,
	trilloJPG,
	raikohappsJPG
};

export const icons = {
	TranslateSVG,
	GmailSVG,
	MenuSVG,
	PinSVG,
	GitHubSVG,
	MediumSVG,
	TwitterSVG,
	YouTubeSVG,
	FacebookSVG,
	InstagramSVG,
	DiscordSVG,
	LinkedInSVG
};

export const technologies = [
	{ name: 'React', bgColor: '#61DAFB', Svg: ReactSVG },
	{ name: 'Redux', bgColor: '#764ABC', Svg: ReduxSVG },
	{ name: 'JavaScript', bgColor: '#F7DF1E', Svg: JavaScriptSVG },
	{ name: 'NodeJS', bgColor: '#339933', Svg: NodeSVG },
	{ name: 'HTML', bgColor: '#E34F26', Svg: HTML5SVG },
	{ name: 'CSS', bgColor: '#1572B6', Svg: CSS3SVG },
	{ name: 'Sass', bgColor: '#CC6699', Svg: SassSVG },
	{ name: 'Shopify', bgColor: '#7AB55C', Svg: ShopifySVG },
	{ name: 'PSQL', bgColor: '#336791', Svg: PostgreSQLSVG },
	{ name: 'Git', bgColor: '#F05032', Svg: GitSVG },
	{ name: 'Bootstrap', bgColor: '#563D7C', Svg: BootstrapSVG },
	{ name: 'Android', bgColor: '#A4C639', Svg: AndroidSVG },
	{ name: 'Firebase', bgColor: '#FFCA28', Svg: FirebaseSVG },
	{ name: 'Access', bgColor: '#BA141A', Svg: AccessSVG },
	{ name: 'Power BI', fill: '#000000', bgColor: '#F3C912', Svg: PowerBISVG },
	{ name: 'Wordpress', bgColor: '#21759B', Svg: WordPressSVG }
];
