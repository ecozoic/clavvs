import { injectGlobal, css } from 'styled-components';

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
    font-family: ${theme.font.family};

    &:focus {
      outline: 0;
    }
  }
`;

export default () => injectGlobal`
  ${overrideMailChimp}

  html {
    background-color: ${theme.colors.black};
    font-size: ${theme.font.rootSize};
  }

  body {
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.fontWeight};
    line-height: ${theme.font.lineHeight};
  }
`;
