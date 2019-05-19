## [personal site](https://jayli3n.me/")
`Live:` https://jayli3n.me/

Designed and developed from scratch using just `React` and `Styled Components`.
It is highly responsive thanks to `flexbox` and media queries using 6 breakpoints.

#### Things that took me a while to get perfect:
- **smoothscroll** when navbar item is clicked
- **meteorshower** that randomly appears in the background

------------

<ins>**Smootherscroll:**</ins>
Achieved by using `requestAnimationFrame()` to smoothly update scroll position.

**Callback function** for `requestAnimationFrame()`:
``` javascript
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
```
**Easing function:**
```javascript
const easingFunction = (t, b, c, d) => {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
}
```
------------

<ins>**Meteorshower:**</ins>
Each meteor is essentially a long, narrow, invisible `div` that is:
- white
- randomly placed on screen at 220 degrees
- plays an infinite animation that makes it visible, scale up, then back to invisible and scaled down

**animation for each metor**
```jss
// animation for the each meteor
const meteorAnimation = keyframes`
  from {
    transform: scale(0);
  }

  1% {
    opacity: ${(getRandomInt(50, 100)) * 0.01};
  }

  6% {
    opacity: 0;
    height: 0;
  }

  7% {
    transform: scale(1);
  }

  to {
    opacity: 0;
  }
`;
```

**styled-component of the meteors:**
```jss
// the meteor, each meteor will have different width, animation duration and delay
const Meteor = styled.i`
	position: fixed;
	width: ${() => `calc(${getRandomInt(2, 6)}px)`};
	height: 90rem;
	animation-name: ${() => meteorAnimation};
	animation-delay: ${() => `${getRandomInt(0, 20)}s`};
	animation-duration: ${() => `${getRandomInt(10, 25)}s`};
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
	background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #fff 80%);
	opacity: 0;
`;
```

```jss
// div wrapper for meteor, spawns at random location on screen and goes diagonal down
const MeteorWrapper = styled.div`
  position: fixed;
  left: ${() => `calc(${getRandomInt(20, 80)}%)`};
  top: ${() => `calc(${getRandomInt(10, 90)}%)`};
  z-index: -99;
  transform: rotate(220deg);
`;
```
**Used like this:**
```jsx
<MeteorWrapper><Meteor /></MeteorWrapper>
```

#### Node Packages Used:
- classnames
- gh-pages
- react
- react-dom
- react-ga
- react-particles-js
- react-scripts
- react-scrollspy
- scrollreveal
- styled-components