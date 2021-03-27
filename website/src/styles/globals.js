import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body[data-theme='light'] {
    /* Base */
    --colors-background: #FFFFFF;
    --colors-foreground: #F9F9F9;
    --colors-reverse: #111111;
    /* Accents */
    --colors-accents-a1: #111111;
    --colors-accents-a2: #444444;
    --colors-accents-a3: #666666;
    --colors-accents-a4: #888888;
    --colors-accents-a5: #999999;
    --colors-accents-a6: #a3a8c3;
    --colors-accents-a7: #f0eef1;
    --colors-accents-a8: #fafafa;
    /* Texts */
    --colors-text-default: #1d1b1f;
    --colors-text-alt: #181818;
    --colors-text-placeholder: #7C8894;
    --colors-text-inactive: #989898;
    --colors-text-reverse: #FFFFFF;
    --colors-text-accent: #a3a8c3;
    /* Shadows */
    --shadows-default: 0 10px 30px -10px rgba(32, 14, 50, 0.16);
    --shadows-small: 0 10px 30px -10px rgba(32, 14, 50, 0.16);
    --shadows-medium:0 20px 30px -15px  rgba(32, 14, 50, 0.16);
    --shadows-large: 0 30px 60px rgba(32, 14, 50, 0.16);
  }

  body[data-theme='dark'] {
    /* Base */
    --colors-background: #111111;
    --colors-foreground: #151418;
    --colors-reverse: #F4F4F4;
    /* Accents */
    --colors-accents-a1: #fafafa;
    --colors-accents-a2: #f0eef1;
    --colors-accents-a3: #bcbabb;
    --colors-accents-a4: #999999;
    --colors-accents-a5: #888888;
    --colors-accents-a6: #a3a8c3;
    --colors-accents-a7: #444444;
    --colors-accents-a8: #222222;
    /* Texts */
    --colors-text-default: #f4f4f4;
    --colors-text-alt: #FFFFFF;
    --colors-text-placeholder: #7C8894;
    --colors-text-inactive: #989898;
    --colors-text-reverse: #FFFFFF;
    --colors-text-accent: #a3a8c3;
    /* Shadows */
    --shadows-default: 0 10px 30px -10px rgba(32, 14, 50, 0.16);
    --shadows-small: 0 10px 30px -10px rgba(32, 14, 50, 0.16);
    --shadows-medium:0 20px 30px -15px  rgba(32, 14, 50, 0.16);
    --shadows-large: 0 30px 60px rgba(32, 14, 50, 0.16);
  }

  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 62.5%; /*16px -> 100%   |   10px -> 62.5%   |   10px = 1rem*/
    line-height: 1.5;
    color: ${(props) => props.theme.text.default};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${(props) => props.theme.fontFamily.fontSans}
  }

  @media (min-width: 1600px) {
    html {
        font-size: 60%;
    }
  }

  body {
    background-color: var(--colors-background);
    width: 100%;
    height: 100%;   
    font-weight: 400;
    color: var(--colors-text-default);
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;

    &.hidden {
      overflow: hidden;
    }

  }

  #root {
    height: 100%;
    width: 100%;
  }

  p,a,b {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none
  }
`
