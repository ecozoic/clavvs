import React from 'react';
import styled from 'styled-components';

import socials from '../../data/socials';

const SocialsListItem = styled.li`
  display: inline-block;

  & > a {
    color: ${props => props.theme.colors.white};
    transition: all ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};

    &:hover {
      color: ${props => props.theme.colors.purple};
    }
  }
`;

const Socials = () => (
  <ul>
    {socials.map(social => (
      <SocialsListItem key={social.id}>
        <a href={social.href}>
          <i className={social.icon} />
        </a>
      </SocialsListItem>
    ))}
  </ul>
);

export default Socials;
