import React from 'react';
import styled from 'styled-components';

import footer from '../../data/footer';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gray};
  font-size: 12px;
`;

const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
`;

const FooterListItem = styled.li`
  flex-basis: 50%;
  padding: 24px 2%;
`;

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const FooterListContent = styled.p`
  color: ${props => props.theme.colors.white};
`;

const FooterListLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: color .3s ease;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterList>
      {footer.links.map(link => (
        <FooterListItem key={link.id}>
          <FooterListHeader>{link.header}</FooterListHeader>
          <FooterListContent>
            <FooterListLink href={link.href}>
              {link.text}
            </FooterListLink>
          </FooterListContent>
        </FooterListItem>
      ))}
    </FooterList>
  </StyledFooter>
);

export default Footer;
