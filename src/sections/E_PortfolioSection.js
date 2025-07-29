import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { PORTFOLIO } from '../data';
import { COLORS, TYPOGRAPHY, COMMON_STYLES, PULSE_EFFECT } from '../atoms';
import { Section, GAAnchor } from '../components';
import { icons, technologies } from '../assets';

const DetailsComponent = ({ icons, title, text }) => (
    <DetailsDiv>
        <IconsDiv>
            {icons.map((index, i) => {
                const Svg = technologies[index].Svg;
                return (
                    <IconDiv color={COLORS.GREY_2} key={i}>
                        <Svg />
                    </IconDiv>
                );
            })}
        </IconsDiv>
        <StyledH6 weight={400} color={COLORS.GREY_1}>
            {title}
        </StyledH6>
        <TYPOGRAPHY.P>{text}</TYPOGRAPHY.P>
    </DetailsDiv>
);

// Buttons component for the live / source code buttons
const ButtonsComponent = ({ title, liveLink, sourceLink }) => (
    <ButtonsDiv>
        <Anchor href={liveLink} target="_blank" rel="noopener noreferrer">
            <WhiteDot />
            <TYPOGRAPHY.Span>Live</TYPOGRAPHY.Span>
        </Anchor>
        {sourceLink ? (
            <Anchor href={sourceLink} target="_blank" rel="noopener noreferrer" sourceButton>
                <IconDiv>
                    <icons.GitHubSVG />
                </IconDiv>
                <TYPOGRAPHY.Span>Source</TYPOGRAPHY.Span>
            </Anchor>
        ) : null}
    </ButtonsDiv>
);

const CardsComponent = ({ portfolio, isShowAll }) => (
    <CardsDiv isShowAll={isShowAll} className="scrollreveal">
        {portfolio.map(({ imgPath, icons, title, text, liveLink, sourceLink }, i) => (
            <CardDiv key={i}>
                <ImageDiv>
                    <img src={imgPath} alt={title} />
                </ImageDiv>
                <DetailsComponent icons={icons} title={title} text={text} />
                <ButtonsComponent title={title} liveLink={liveLink} sourceLink={sourceLink} />
            </CardDiv>
        ))}
    </CardsDiv>
);

export class PortfolioSection extends Component {
    state = {
        showAllText: 'Show All',
        isShowAll: false,
    };

    showAll = () => {
        // Since more cards will be shown, scrollreveal needs to sync them
        if (this.state.isShowAll) {
            this.setState({
                showAllText: 'Show All',
                isShowAll: false,
            });
        } else {
            this.setState({
                showAllText: 'Hide',
                isShowAll: true,
            });
        }
        ScrollReveal().sync();
    };

    render() {
        return (
            <Section id={this.props.id} title="Projects" transparent>
                <WrapperDiv>
                    <CardsComponent portfolio={PORTFOLIO} isShowAll={this.state.isShowAll} />
                    <ShowAllButton onClick={this.showAll}>
                        <TYPOGRAPHY.S1 weight={400} color="inherit">
                            {this.state.showAllText}
                        </TYPOGRAPHY.S1>
                    </ShowAllButton>
                </WrapperDiv>
            </Section>
        );
    }
}

const WrapperDiv = styled.div`
    width: 100%;
`;

const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    height: ${(props) => (props.isShowAll ? '' : '96rem')};

    @supports (display: grid) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(33.33rem, 0.4fr));
        justify-items: center;
        align-content: start;
        align-items: start;
    }
`;

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 31.33rem;
    height: 47rem;
    margin: 0 1rem 2rem 1rem;
    background-color: ${COLORS.WHITE};
    box-shadow: 0 0.5px 1px #00000015;
    border: 1px solid ${COLORS.GREY_6};
    border-radius: 8px;
    overflow: hidden;
    transition: 0.2s all;

    :hover {
        box-shadow: 0 1.5px 3px #00000026;
    }
`;

const ImageDiv = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    opacity: 0.86;
    overflow: hidden;

    img {
        height: 100%;
        width: auto;
    }
`;

const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.2rem 1.6rem 1.8rem 1.6rem;
`;

const StyledH6 = styled(TYPOGRAPHY.H6)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: auto;
    padding: 1.3rem 1.6rem;
    font-size: 1.1rem;
    font-weight: 300;
`;

const Anchor = styled(GAAnchor)`
    display: flex;
    align-items: center;

    text-decoration: none;
    padding: 0.5rem 1.2rem;
    border-radius: ${COMMON_STYLES.BORDER_RADIUS};
    color: ${COLORS.WHITE};
    background-color: ${(props) => (props.sourceButton ? COLORS.GREY_4 : COLORS.PRIMARY_LIGHT)};

    & > * {
        animation: ${(props) => (props.sourceButton ? 'none' : PULSE_EFFECT)} 3s infinite;
    }

    :not(:last-child) {
        margin-right: 0.8rem;
    }

    :active {
        background-color: ${(props) => (props.sourceButton ? COLORS.GREY_3 : COLORS.PRIMARY)};
    }
`;

const IconsDiv = styled.div`
    display: flex;
`;

const IconDiv = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    fill: ${(props) => (props.color ? props.color : COLORS.WHITE)};

    :not(:last-child) {
        margin-right: 0.5rem;
    }
`;

const WhiteDot = styled.div`
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.55rem;
    border-radius: 50%;
    background-color: ${COLORS.WHITE};
    opacity: 1;
`;

const ShowAllButton = styled.button`
    display: block;
    margin: 1.9rem auto;
    color: ${COLORS.GREY_3};
    background-color: transparent;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid ${COLORS.GREY_4};

    :hover {
        color: ${COLORS.GREY_2};
        border-bottom: 3px solid ${COLORS.GREY_2};
    }

    :active {
        color: ${COLORS.GREY_3};
        border-bottom: 2px solid ${COLORS.GREY_3};
    }
`;
