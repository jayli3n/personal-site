import {smooth_scroll_duration} from '../atoms/variables';


// smooth scroll effect
const smoothScroll = (id, duration = smooth_scroll_duration) => {
	const target = document.getElementById(id);
	// distance of section top from the top
	const targetPosition = target.offsetTop;
	// distance of windows top from the top
	const startingPosition = window.pageYOffset;
	// find distance
	const displacement = targetPosition - startingPosition;

	let startTime = null;
	// callback for requestAnimationFrame
	const animationScroll = (currentTime) => {
		if(startTime === null){
			startTime = currentTime;
		}

		let timeElapsed = currentTime - startTime;
		const run = easingFunction(timeElapsed, startingPosition, displacement, duration);
		window.scrollTo(0, run);

		// keep scrolling until duration reached or positioned reached
		if(timeElapsed < duration && (window.pageYOffset - targetPosition) !== 0){
			requestAnimationFrame(animationScroll);
		}
	}

	const easingFunction = (t, b, c, d) => {
	  	return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}

	// allows for smooth animation
	requestAnimationFrame(animationScroll)
}

export default smoothScroll;