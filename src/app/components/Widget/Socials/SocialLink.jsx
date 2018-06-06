import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SocialListItem = styled.div`
  font-size: ${props => props.theme.scale.biggest}rem;
  text-align: center;

  & > a {
    color: ${props => props.theme.colors.white};
    transition: color ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};

    &:hover {
      color: ${props => props.theme.colors.purple};
    }
  }
`;

@observer
class SocialLink extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    link: PropTypes.object.isRequired,
  }
  render() {
    return (
      <SocialListItem className="column">
        <a href={this.props.link.href}>
          <i className={this.props.link.icon} />
        </a>
      </SocialListItem>
    );
  }
}

export default SocialLink;
