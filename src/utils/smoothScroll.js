import {smooth_scroll_duration} from '../atoms/variables';


//smooth scroll effect
const smoothScroll = (target, duration = smooth_scroll_duration) => {
	//distance of section top from the top
	const targetPosition = target.current.getBoundingClientRect().top;
	//distance of windows top from the top
	const startingPosition = window.pageYOffset;
	//find distance
	const displacement = targetPosition - startingPosition;

	let startTime = null;

	const animationScroll = (currentTime) => {
		if(startTime === null){
			startTime = currentTime;
		}

		let timeElapsed = currentTime - startTime;
		const run = easingFunction(timeElapsed, startingPosition, displacement, duration);
		window.scrollTo(0, run);

		//keep scrolling until duration reached (also mean until distance reached)
		if(timeElapsed < duration){
			requestAnimationFrame(animationScroll);
		}
	}

	const easingFunction = (t, b, c, d) => {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		}

	// (t, b, c, d) => {
	// 	t /= d /2;
	// 	if(t<1) return c / 2 * t * t + b;
	// 	t--;
	// 	return -c / 2 * (t * (t - 2) - 1) + b;
	// }

	requestAnimationFrame(animationScroll)
}

export default smoothScroll;