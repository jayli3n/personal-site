import { SMOOTH_SCROLL_DURATION } from '../atoms';


// Smooth scroll effect
export const smoothScroll = (id, duration = SMOOTH_SCROLL_DURATION) => {
	const target = document.getElementById(id);
	// Distance of section top from the top
	const targetPosition = target.offsetTop;
	// Distance of windows top from the top
	const startingPosition = window.pageYOffset;
	// Find distance
	const displacement = targetPosition - startingPosition;

	let startTime = null;
	// Callback for requestAnimationFrame
	const animationScroll = (currentTime) => {
		if(startTime === null){
			startTime = currentTime;
		}

		let timeElapsed = currentTime - startTime;
		const run = easingFunction(timeElapsed, startingPosition, displacement, duration);
		window.scrollTo(0, run);

		// Keep scrolling until duration reached or positioned reached
		if(timeElapsed < duration && (window.pageYOffset - targetPosition) !== 0){
			requestAnimationFrame(animationScroll);
		}
	}

	const easingFunction = (t, b, c, d) => {
	  	return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}

	// Allows for smooth animation
	requestAnimationFrame(animationScroll)
}
