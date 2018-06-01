import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Socials = ({ links }) => (
  <SocialsContainer>
    <div className="columns is-mobile is-multiline">
      {links.map(link => (
        <SocialsListItem className="column" key={link.id}>
          <a href={link.href}>
            <i className={link.icon} />
          </a>
        </SocialsListItem>
      ))}
    </div>
  </SocialsContainer>
);

Socials.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.array.isRequired,
};

export default Socials;
