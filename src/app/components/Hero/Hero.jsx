import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import img from '../../../images/clavvs_single.png';
import mobileImg from '../../../images/clavvs_single_mobile2.png';

import HeroButton from './HeroButton';

const HeroImage = styled.section`
  background: url('${img}') no-repeat center / cover;
  border-bottom: 1px solid ${props => props.theme.colors.purple};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    background: url('${mobileImg}') no-repeat center/cover;
    background-position-x: 75%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    background-position-x: 60%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    margin: ${props => props.theme.scale.bigger}rem;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      margin: ${props => props.theme.scale.small}rem;
      padding: ${props => props.theme.scale.small}rem;
    }
  }
`;

@inject('store')
@observer
class Hero extends Component {
  static propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <HeroImage className="hero is-fullheight">
        <div className="hero-head" />
        <div className="hero-body" />
        <div className="hero-foot">
          <ButtonContainer className="container">
            {this.props.store.hero.links.map(link => (
              <HeroButton key={link.id} link={link} />
            ))}
          </ButtonContainer>
        </div>
      </HeroImage>
    );
  }
}

export default Hero;
