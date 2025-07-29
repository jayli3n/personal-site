import React, { Component } from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../atoms';
import { Section } from '../components';
import { icons } from '../assets';

const ListItemComponent = ({ svg, value }) => (
    <ListItem>
        <IconDiv>{svg}</IconDiv>
        <TYPOGRAPHY.P>{value}</TYPOGRAPHY.P>
    </ListItem>
);

export class ProfileSection extends Component {
    render() {
        return (
            <Section id={this.props.id} title="Get to Know Me">
                <WrapperDiv>
                    <AboutDiv className="scrollreveal">
                        <StyledH5>Hello...</StyledH5>
                        <TYPOGRAPHY.P>
                            I’m James — thanks for stopping by!
                            <br />
                            I’m a software engineer who loves to see magic happen and problems solved from my lines of
                            code. In addition, I love to work in a team and make meaningful connections with people.
                        </TYPOGRAPHY.P>
                    </AboutDiv>
                    <InfoDiv className="scrollreveal">
                        <StyledH5>Metadata</StyledH5>
                        <Ul>
                            <ListItemComponent svg={<icons.GmailSVG />} value="jayli3n&#64;gmail.com" />
                            <ListItemComponent svg={<icons.PinSVG />} value="Perth, Australia" />
                            <ListItemComponent svg={<icons.TranslateSVG />} value="English, Chinese" />
                        </Ul>
                    </InfoDiv>
                </WrapperDiv>
            </Section>
        );
    }
}

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0.6rem;
`;

const AboutDiv = styled.div`
    flex: 1 1 60%;
    padding: 2rem;
`;

const InfoDiv = styled.div`
    flex: 1 0 40%;
    padding: 2rem;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    list-style: none;
`;

const ListItem = styled.li`
    display: flex;
    align-items: flex-start;

    :not(:first-child) {
        margin-top: 1.2rem;
    }
`;

const StyledH5 = styled(TYPOGRAPHY.H5)`
    margin-bottom: 1.5rem;
`;

const IconDiv = styled.div`
    width: 2rem;
    height: auto;
    margin-right: 1.55rem;

    & > * {
        display: block;
        margin: auto;
    }
`;
