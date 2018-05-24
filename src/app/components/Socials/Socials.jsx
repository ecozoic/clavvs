import React from 'react';
import styled from 'styled-components';

import socials from '../../data/socials';

const SocialsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-bottom: 80px;
`;

const SocialsListItem = styled.li`
  & > a {
    color: ${props => props.theme.colors.white};
    display: block;
    font-size: 72px;
    margin: 0 10px;

    &:hover {
      color: ${props => props.theme.colors.purple};
    }
  }
`;

const Socials = () => (
  <SocialsList>
    {socials.map(social => (
      <SocialsListItem key={social.id}>
        <a href={social.href}>
          <i className={social.icon} />
        </a>
      </SocialsListItem>
    ))}
  </SocialsList>
);

export default Socials;
