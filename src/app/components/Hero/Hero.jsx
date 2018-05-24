import React from 'react';
import styled from 'styled-components';

import HeroButton from '../HeroButton';
import widgets from '../../data/widgets';

import img from '../../../images/clavvs_single.png';

const HeroImage = styled.section`
  background: url('${img}') no-repeat center / cover;
  border-bottom: 1px solid #639;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  min-height: 700px;
  padding-bottom: 20px;
`;

const HeroButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Hero = () => (
  <HeroImage>
    <HeroButtonContainer>
      <HeroButton href={`https://open.spotify.com/artist/${widgets.spotify.artist}`}>
        Music
      </HeroButton>
      <HeroButton href="https://clavvs.bigcartel.com">
        Merch
      </HeroButton>
    </HeroButtonContainer>
  </HeroImage>
);

export default Hero;
