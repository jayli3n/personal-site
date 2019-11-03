import React from 'react';
import ReactGA from 'react-ga';


const fireGAEvent = (href) => {
	const hrefCleaned = href.replace('@', '(at)');
	ReactGA.event({
		category: 'Anchor Click',
		action: `HREF: ${hrefCleaned}`,
	});
};

export const GAAnchor = ({ children, href, target, rel, className }) => (
	<a href={href} target={target} rel={rel} className={className} onClick={() => fireGAEvent(href)}>
		{children}
	</a>
);
