import { css } from 'styled-components';
import { SIZES } from '../atoms';

// Iterate through the sizes and create a media template
export const media = Object.keys(SIZES).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media only screen and (max-width: ${SIZES[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});
