import React, { Component } from 'react';
import styled from 'styled-components';
import { Section } from '../components';
import { TYPOGRAPHY } from '../atoms';
import { EXTRACURRICULAR } from '../data';

const OneActivity = ({ activity: { img, title, text } }) => (
    <ActivityDiv className="scrollreveal">
        <ImageDiv img={img} />
        <div>
            <StyledH5>{title}</StyledH5>
            <TYPOGRAPHY.P>{text}</TYPOGRAPHY.P>
        </div>
    </ActivityDiv>
);

export class ExtracurricularSection extends Component {
    render() {
        return (
            <Section id={this.props.id} title="Outside of Work">
                <InnerDiv>
                    {EXTRACURRICULAR.map((activity, i) => (
                        <OneActivity key={i} activity={activity} />
                    ))}
                </InnerDiv>
            </Section>
        );
    }
}

const InnerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
`;

const ActivityDiv = styled.div`
    flex: 1 1 50%;
    display: flex;
    padding: 2rem;
    min-width: 31rem;
`;

const ImageDiv = styled.div`
    flex: 0 0 auto;
    width: 5rem;
    height: 5rem;
    margin-right: 1.7rem;
    background-image: ${(props) => `url(${props.img})`};
    background-position: center;
    background-size: cover;
`;

const StyledH5 = styled(TYPOGRAPHY.H5)`
    margin-bottom: 0.3rem;
`;
