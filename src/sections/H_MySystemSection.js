import React, {Component} from 'react';
import styled from 'styled-components';
import { MY_SYSTEM } from '../data';
import { media } from '../util';
import {
	Section,
	GAAnchor
} from '../components';
import {
	COLORS,
	TYPOGRAPHY
} from '../atoms';


const OneQuote = ({ quote: { text, link } }) => (
	<ListItem className='scrollreveal'>
		<TYPOGRAPHY.H4 weight={200} align='center' color='inherit'>
			<span role="img" aria-label="point right">👉</span>
			<Anchor href={link} target='_blank' rel="noopener noreferrer">{` ${text} `}</Anchor>
			<span role="img" aria-label="point right">👈</span>
		</TYPOGRAPHY.H4>
	</ListItem>
);

export class MySystemSection extends Component {
	render() {
		return (
			<Section id={this.props.id} title='This is My System'>
				<Ol>{MY_SYSTEM.map((quote, i) => <OneQuote key={i} quote={quote} />)}</Ol>
			</Section>
		)
	}
}

const Ol = styled.ol`
	width: 100%;
	padding: 3rem 2rem;
	list-style-type: none;
	list-style-position: inside;
`;

const ListItem = styled.li`
	margin-bottom: .5rem;

	${media.sizeII`
		font-size: 2.8rem;
	`}
`;

const Anchor = styled(GAAnchor)`
	:link,
	:visited{
		cursor: pointer;
		text-decoration: none;
		color: ${COLORS.GREY_2};
	}

	:hover{
		color: ${COLORS.PRIMARY};
	};
`;
