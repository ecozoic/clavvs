import { injectGlobal, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

const overrideMailChimp = css`
  #mc_embed_signup {
    background: #13181d;
    clear: left;
    font: 14px 'Open Sans', sans-serif;
    margin: 0 auto;

    .asterisk {
      color: #639;
    }
  }

  #mce-EMAIL {
    color: #13181d;

    &:focus {
      outline-color: #639;
    }
  }

  #mc-embedded-subscribe {
    background: #639 !important;

    &:focus {
      outline: 0;
    }
  }
`;

export default () => injectGlobal`
  ${styledNormalize}

  ${overrideMailChimp}

  * {
    box-sizing: border-box;
  }

  body {
    background: #13181d;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;
