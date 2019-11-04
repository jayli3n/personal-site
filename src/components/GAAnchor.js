import React from 'react';
import ReactGA from 'react-ga';


const fireGAEvent = (href) => {
	const hrefCleaned = href ? href.replace('@', '(at)') : '(Blank)';
	ReactGA.event({
		category: 'Anchor Click',
		action: `HREF: ${hrefCleaned}`,
	});
};

export const GAAnchor = ({ children, href, target, rel, className, onClick }) => (
	<a href={href} target={target} rel={rel} className={className}
		onClick={() => {
			onClick && onClick();
			fireGAEvent(href);
		}}
	>
		{children}
	</a>
);
