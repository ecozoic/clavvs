import React from 'react';
import styled from 'styled-components';

import HeroButton from '../HeroButton';
import hero from '../../data/hero';

const HeroImage = styled.section`
  background: url('${hero.backgroundUrl}') no-repeat center / cover;
  border-bottom: 1px solid ${props => props.theme.colors.purple};
`;

const Hero = () => (
  <HeroImage className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        {hero.buttons.map(button => (
          <HeroButton key={button.id} href={button.href}>
            {button.text}
          </HeroButton>
        ))}
      </div>
    </div>
  </HeroImage>
);

export default Hero;
