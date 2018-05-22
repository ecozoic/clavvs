import { injectGlobal, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

const overrideMailChimp = css`
  #mc_embed_signup {
    background: #13181d;
    clear: left;
    font: 14px 'Open Sans', sans-serif;
    margin: 0 auto;
    max-width: 800px;

    h2 {
      color: #fff;
    }

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

  body {
    background: #13181d;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
  }
`;
