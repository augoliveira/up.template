'use client';
import { createGlobalStyle } from 'styled-components';

import variables from '#/styles/variables';
import TransitionStyles from '#/styles/TransitionStyles';
import PrismStyles from '#/styles/PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;


    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 5rem 0;
    max-width: 1200px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 900;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }


  img[alt=""],
  img:not([alt]) {
    filter: blur(0px);
  }



  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }


    code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};




  .headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 10vw;
}

.inset {
  position: absolute;
  inset: 0;
}

.white {
  color: white;
}
.gray {
  color: #446;
}

.full {
  height: 100vh;
  z-index: -1;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient {
  background: linear-gradient(rgba(14, 62, 151, 0.5) 50%, black);
}


  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .green{
  background: linear-gradient(160.44deg, #ffeb6b 1.37%, #fcb93d 58.45%);
    background-clip: text;
    font-family: montserrat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

  ${TransitionStyles};

  ${PrismStyles};

  /* ====================== [ Start Cursor Style ] ====================== */
body {
  cursor: none;
}

.mouse-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  visibility: hidden;
}

.cursor-inner {
  margin-left: 2px;
  margin-top: 2px;
  width: 6px;
  height: 6px;
  z-index: 10000001;
  background-color: #fab702;
  -webkit-transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
  -o-transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.cursor-inner.cursor-hover {
  margin-left: -40px;
  margin-top: -40px;
  width: 80px;
  height: 80px;
  background-color: #fab702;
  opacity: 0.3;
}

.cursor-outer {
  margin-left: -15px;
  margin-top: -15px;
  width: 40px;
  height: 40px;
  border: 1px solid #fab702;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10000000;
  opacity: 0.5;
  -webkit-transition: all 0.08s ease-out;
  -o-transition: all 0.08s ease-out;
  transition: all 0.08s ease-out;
}
.cursor-outer.cursor-hover {
  opacity: 0;
}

/* ====================== [ End Cursor Style ] ====================== */
/* ====================== [ Start progress-wrap ] ====================== */
.progress-wrap {
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(20px);
  -ms-transform: translateY(20px);
  transform: translateY(20px);
  -webkit-transition: all 400ms linear;
  -o-transition: all 400ms linear;
  transition: all 400ms linear;
}

.progress-wrap.active-progress {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.progress-wrap::after {
  position: absolute;
  font-family: "Font Awesome 6 Free";
  content: "\f062";
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  font-weight: 900;
  color: #fab702;
  left: 0;
  top: 0;
  height: 44px;
  width: 44px;
  cursor: pointer;
  display: block;
  z-index: 1;
  -webkit-transition: all 400ms linear;
  -o-transition: all 400ms linear;
  transition: all 400ms linear;
}

.progress-wrap svg path {
  fill: none;
}

.progress-wrap svg.progress-circle path {
  stroke: #fab702;
  stroke-width: 4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 400ms linear;
  -o-transition: all 400ms linear;
  transition: all 400ms linear;
}

/* ====================== [ End progress-wrap ] ====================== */
`;

export default GlobalStyle;
