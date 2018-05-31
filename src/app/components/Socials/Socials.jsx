import React from 'react';
import styled from 'styled-components';

import socials from '../../data/socials';

const SocialsContainer = styled.div`
  padding-bottom: ${props => props.theme.scale.biggest}rem;
  padding-top: ${props => props.theme.scale.huge}rem;
`;

const SocialsListItem = styled.div`
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

const Socials = () => (
  <SocialsContainer>
    <div className="columns is-mobile is-multiline">
      {socials.map(social => (
        <SocialsListItem className="column" key={social.id}>
          <a href={social.href}>
            <i className={social.icon} />
          </a>
        </SocialsListItem>
      ))}
    </div>
  </SocialsContainer>
);

export default Socials;
