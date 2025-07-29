import React from 'react';
import styled from 'styled-components';
import { media } from '../util';
import { COLORS, COMMON_STYLES, SECTION_WIDTHS, TYPOGRAPHY } from '../atoms';

export const Section = ({ id, className, children, transparent, title, ref }) => (
    <StyledSection id={id} className={className}>
        {title && <StyledH3>{title}</StyledH3>}
        <InnerDiv className="scrollreveal" transparent={transparent}>
            {children}
        </InnerDiv>
    </StyledSection>
);

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10rem 6rem 2rem 6rem;
    background-color: ${(props) => (props.transparent ? `transparent` : COLORS.GREY_7)};

    :nth-of-type(2) {
        padding-top: 14rem;
        border-top-right-radius: 50% 3vh;
        border-top-left-radius: 50% 3vh;
    }

    :nth-last-of-type(2) {
        padding-bottom: 16rem;
        border-bottom-right-radius: 50% 3vh;
        border-bottom-left-radius: 50% 3vh;
    }

    ${media.sizeIV`
		padding: 8rem 3rem 2rem 3rem;
	`}

    ${media.sizeIII`
		padding: 8rem 1.5rem 2rem 1.5rem;
	`}
`;

// A paper looking container in the center of each section
// Transparent prop essentially makes it invisible, just useful for it's structure and styles
const InnerDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: ${(props) => (props.transparent ? `none` : `3rem`)};
    min-width: ${SECTION_WIDTHS.MIN_WIDTH};
    max-width: ${SECTION_WIDTHS.MAX_WIDTH};
    width: 100%;
    background-color: ${(props) => (props.transparent ? `transparent` : COLORS.CONTAINER_BG)};
    box-shadow: ${(props) => (props.transparent ? `none` : COMMON_STYLES.BOX_SHADOW)};
    border-radius: ${COMMON_STYLES.BORDER_RADIUS};

    :hover {
        box-shadow: ${(props) => (props.transparent ? `none` : COMMON_STYLES.BOX_SHADOW_HOVER)};
    }

    ${media.sizeVI`
		padding: ${(props) => (props.transparent ? `none` : `2.5rem`)};
	`}
`;

const StyledH3 = styled(TYPOGRAPHY.H3)`
    margin-bottom: 3rem;
    color: ${COLORS.GREY_2};
`;
