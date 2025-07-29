import React from 'react';
import styled from 'styled-components';
import { Socials, GAAnchor } from '../components';
import { COLORS, TYPOGRAPHY } from '../atoms';

export const FooterSection = ({ id }) => (
    <Section id={id} className="scrollreveal">
        <StyledH3 className="scrollreveal" color={COLORS.WHITE} align="center">
            Let's get in touch!
        </StyledH3>
        <StyledP color={COLORS.GREY_6} align="center">
            I'm always open to make new friends.
            <br />
            Shoot me an email at:{' '}
            <A href="mailto: jayli3n@gmail.com" rel="noopener noreferrer">
                jayli3n@gmail.com
            </A>
        </StyledP>
        <TYPOGRAPHY.S2 color={COLORS.GREY_5} align="center">
            &copy; 2019 - 2024 James Li, All Rights Reserved.
        </TYPOGRAPHY.S2>
        <StyledSocials small />

        <StyledS2 color={COLORS.GREY_4} align="right">
            Source code can be found{' '}
            <A href="https://github.com/jayli3n/personal-site" target="_blank" rel="noopener noreferrer">
                here
            </A>
            .<br />
            Checkout my LinkedIn for my latest updates.
        </StyledS2>
    </Section>
);

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 6rem 7rem 6rem;
    background-color: #00000020;
`;

const StyledH3 = styled(TYPOGRAPHY.H3)`
    margin-bottom: 3rem;
`;

const StyledP = styled(TYPOGRAPHY.P)`
    margin-bottom: 3rem;
`;

const A = styled(GAAnchor)`
    :link,
    :visited {
        padding: 0.1rem 0.5rem;
        background-color: ${COLORS.PRIMARY};
        color: ${COLORS.WHITE};
        text-decoration: none;
    }

    :hover {
        border-bottom: 2px solid ${COLORS.WHITE};
    }
`;

const StyledS2 = styled(TYPOGRAPHY.S2)`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2rem 2.5rem;
`;

const StyledSocials = styled(Socials)`
    margin-top: 1.2rem;
    margin-bottom: 2rem;
`;
