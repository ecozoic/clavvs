import { injectGlobal } from 'styled-components';

import theme from './theme';

export default () => injectGlobal`
  html {
    background-color: ${theme.colors.black};
    font-size: ${theme.font.rootSize};
  }

  body {
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.regular};
    line-height: ${theme.font.lineHeight};
  }
`;
