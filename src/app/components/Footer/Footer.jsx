import React from 'react';
import styled from 'styled-components';

import footer from '../../data/footer';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gray};
`;

const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const FooterListItem = styled.li`
  flex-basis: 50%;
`;

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.gray};
`;

const FooterListContent = styled.p`
  color: ${props => props.theme.colors.white};
`;

const FooterListLink = styled.a`
  color: ${props => props.theme.colors.white};
  transition: color .3s ease;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <div className="container">
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
    </div>
  </StyledFooter>
);

export default Footer;
