import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import SocialLink from './SocialLink';

const SocialsContainer = styled.div`
  padding-bottom: ${props => props.theme.scale.biggest}rem;
  padding-top: ${props => props.theme.scale.huge}rem;
`;

@inject('store')
@observer
class Socials extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <SocialsContainer>
        <div className="columns is-mobile is-multiline">
          {this.props.store.social.links.map(link => (
            <SocialLink key={link.id} link={link} />
          ))}
        </div>
      </SocialsContainer>
    );
  }
}

export default Socials;
