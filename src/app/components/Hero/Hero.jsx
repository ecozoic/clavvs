import React from 'react';
import styled from 'styled-components';

import HeroButton from '../HeroButton';
import hero from '../../data/hero';

const HeroImage = styled.section`
  background: url('${hero.backgroundUrl}') no-repeat center / cover;
  border-bottom: 1px solid ${props => props.theme.colors.purple};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    background: url('${hero.mobileBackgroundUrl}') no-repeat center/cover;
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

const Hero = () => (
  <HeroImage className="hero is-fullheight">
    <div className="hero-head" />
    <div className="hero-body" />
    <div className="hero-foot">
      <ButtonContainer className="container">
        {hero.buttons.map(button => (
          <HeroButton key={button.id} href={button.href}>
            {button.text}
          </HeroButton>
        ))}
      </ButtonContainer>
    </div>
  </HeroImage>
);

export default Hero;
