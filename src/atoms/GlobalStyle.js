import { createGlobalStyle, css } from 'styled-components';
import { fonts } from '../assets';
import { COLORS, SIZES } from './constants';

export const media = Object.keys(SIZES).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media only screen and (max-width: ${SIZES[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});

// Applies a global reset and global styles
export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_HEAVY}');
      font-weight: 600;
  }
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_BOLD}');
      font-weight: 500;
  }
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_MEDIUM}');
      font-weight: 400;
  }
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_REGULAR}');
      font-weight: 300;
  }
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_LIGHT}');
      font-weight: 200;
  }
  @font-face {
      font-family: "Raleway";
      src: url('${fonts.FONT_THIN}');
      font-weight: 100;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-weight: inherit;
  }

  ::selection {
    color: ${COLORS.HIGHLIGHT_TEXT};
    background-color: ${COLORS.HIGHLIGHT_BG};
  }

  html {
    // So that 1rem = 10px since default in browsers is 1rem = 16px.
    // 10px/16px = 62.5%
    font-size: 62.5%;
    color: ${COLORS.GREY_1};
    box-sizing: border-box;
    font-family: 'Raleway', 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    line-height: 1.4;

    ${media.sizeI`
      font-size: 57%;
    `}

    ${media.sizeII`
      font-size: 50.5%;
    `}
  }

  body {
    min-width: 320px;
  }
`;
