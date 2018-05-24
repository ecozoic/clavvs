import { injectGlobal, css } from 'styled-components';
import styledReset from 'styled-reset';

import theme from './theme';

const overrideMailChimp = css`
  #mc_embed_signup {
    background: ${theme.colors.black};
    clear: left;
    font: 14px ${theme.fontFamily};
    margin: 0 auto;

    .asterisk {
      color: ${theme.colors.purple};
    }
  }

  #mce-EMAIL {
    color: ${theme.colors.black};

    &:focus {
      outline-color: ${theme.colors.purple};
    }
  }

  #mc-embedded-subscribe {
    background: ${theme.colors.purple} !important;

    &:focus {
      outline: 0;
    }
  }
`;

export default () => injectGlobal`
  ${styledReset}

  ${overrideMailChimp}

  * {
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily};
    line-height: 1.5;
  }
`;
