import React from 'react';
import styled from 'styled-components';
import { GAAnchor } from './GAAnchor';
import { SOCIALS } from '../data';
import { COLORS } from '../atoms';

export const Socials = ({ small, className }) => (
    <SocialsDiv isSmall={small} className={className}>
        {SOCIALS.map((item, i) => (
            <SocialIcon key={i} isSmall={small} href={item.link} target="_blank" rel="noopener noreferrer">
                <item.Svg />
            </SocialIcon>
        ))}
    </SocialsDiv>
);

const SocialsDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialIcon = styled(GAAnchor)`
	cursor: pointer;
	height: ${(props) => (props.isSmall ? '1.9rem' : '2.2rem')};
	width: ${(props) => (props.isSmall ? '1.9rem' : '2.2rem')};
	fill: ${COLORS.GREY_5};
	transition: all .2s;

	:not(:last-child) {
		margin-right: ${(props) => (props.isSmall ? '1rem' : '1.2rem')};
	};

	:hover {
		fill: ${COLORS.WHITE};
	;

	:active {
		fill: ${COLORS.GREY_4};
	;
`;
