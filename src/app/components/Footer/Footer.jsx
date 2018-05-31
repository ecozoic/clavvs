import React from 'react';
import styled from 'styled-components';

import footer from '../../data/footer';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gray};
  padding-bottom: 3rem;
`;

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.gray};
  margin-bottom: ${props => props.theme.scale.small}rem;
`;

const FooterListContent = styled.p`
  color: ${props => props.theme.colors.white};
`;

const FooterListLink = styled.a`
  color: ${props => props.theme.colors.white};
  transition: color ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <div className="container">
      <div className="columns">
        {footer.links.map(link => (
          <div className="column" key={link.id}>
            <FooterListHeader>{link.header}</FooterListHeader>
            <FooterListContent>
              <FooterListLink href={link.href}>
                {link.text}
              </FooterListLink>
            </FooterListContent>
          </div>
        ))}
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
