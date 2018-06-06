import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import FooterItem from './FooterItem';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gray};
  padding-bottom: 3rem;
`;

@inject('store')
@observer
class Footer extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <StyledFooter className="footer">
        <div className="container">
          <div className="columns">
            {this.props.store.footer.links.map(link => (
              <FooterItem key={link.id} link={link} />
            ))}
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
