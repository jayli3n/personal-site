// Import fonts and its variants
import FONT_HEAVY from './fonts/StratumNo1 Heavy.ttf';
import FONT_BOLD from './fonts/StratumNo1 Bold.ttf';
import FONT_MEDIUM from './fonts/StratumNo1 Medium.ttf';
import FONT_REGULAR from './fonts/StratumNo1 Regular.ttf';
import FONT_LIGHT from './fonts/StratumNo1 Light.ttf';
import FONT_THIN from './fonts/StratumNo1 Thin.ttf';

// Import images
import avatarJPG from './jayli3n-avatar.jpg';
import tutorJPG from './experiences/jayli3n-tutor.jpg';
import ultraveJPG from './experiences/jayli3n-ultrave.jpg';
import woodJPG from './experiences/jayli3n-woodplc.jpg';
import bookPNG from './outside/jayli3n-book.png';
import litPNG from './outside/jayli3n-lit.png';
import racketPNG from './outside/jayli3n-racket.png';
import workoutPNG from './outside/jayli3n-workout.png';
import facialJPG from './portfolio/jayli3n-facial-recognition-web-app_snapshot.jpg';
import jayli3nJPG from './portfolio/jayli3n-jayli3n-site.jpg';
import linearGradJPG from './portfolio/jayli3n-linear-gradient_snapshot.jpg';
import natoursJPG from './portfolio/jayli3n-natours-tour-startup_snapshot.jpg';
import nexterJPG from './portfolio/jayli3n-nexter-real-estate_snapshot.jpg';
import starwarsJPG from './portfolio/jayli3n-starwars-api_snapshot.jpg';
import thewestcoinsJPG from './portfolio/jayli3n-the-west-coins_snapshot.jpg';
import trilloJPG from './portfolio/jayli3n-trillo-hotel-booking_snapshot.jpg';

// Import vectors
import { ReactComponent as TranslateSVG } from './icons/jayli3n-google_translate.svg';
import { ReactComponent as GitHubSVG } from './icons/jayli3n-github.svg';
import { ReactComponent as GmailSVG } from './icons/jayli3n-gmail.svg';
import { ReactComponent as LinkedInSVG } from './icons/jayli3n-linkedin.svg';
import { ReactComponent as MediumSVG } from './icons/jayli3n-medium.svg';
import { ReactComponent as MenuSVG } from './icons/jayli3n-menu.svg';
import { ReactComponent as TwitterSVG } from './icons/jayli3n-twitter.svg';
import { ReactComponent as PinSVG } from './icons/jayli3n-pin.svg';
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
	woodJPG
};

export const outsidePNGs = {
	bookPNG,
	litPNG,
	racketPNG,
	workoutPNG
};

export const portfolioJPGs = {
	facialJPG,
	jayli3nJPG,
	linearGradJPG,
	natoursJPG,
	nexterJPG,
	starwarsJPG,
	thewestcoinsJPG,
	trilloJPG
};

export const icons = {
	TranslateSVG,
	GitHubSVG,
	GmailSVG,
	LinkedInSVG,
	MediumSVG,
	MenuSVG,
	TwitterSVG,
	PinSVG
};

export const technologies = [
	{ name: 'React', color: '#61DAFB', Svg: ReactSVG },
	{ name: 'Redux', color: '#764ABC', Svg: ReduxSVG },
	{ name: 'Javascript', color: '#F7DF1E', Svg: JavaScriptSVG },
	{ name: 'HTML', color: '#E34F26', Svg: HTML5SVG },
	{ name: 'CSS', color: '#1572B6', Svg: CSS3SVG },
	{ name: 'Sass', color: '#CC6699', Svg: SassSVG },
	{ name: 'NodeJS', color: '#339933', Svg: NodeSVG },
	{ name: 'PSQL', color: '#336791', Svg: PostgreSQLSVG },
	{ name: 'Git', color: '#F05032', Svg: GitSVG },
	{ name: 'Bootstrap', color: '#563D7C', Svg: BootstrapSVG },
	{ name: 'Shopify', color: '#7AB55C', Svg: ShopifySVG },
	{ name: 'Android', color: '#A4C639', Svg: AndroidSVG },
	{ name: 'Firebase', color: '#FFCA28', Svg: FirebaseSVG },
	{ name: 'Access', color: '#BA141A', Svg: AccessSVG },
	{ name: 'Wordpress', color: '#21759B', Svg: WordPressSVG }
];
