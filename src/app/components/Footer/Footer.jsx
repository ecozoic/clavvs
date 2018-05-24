import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  clear: both;
  color: ${props => props.theme.colors.gray};
  font-size: 12px;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0 2%;
  overflow: hidden;
`;

const FooterListItem = styled.li`
  float: left;
  padding: 24px 2%;
  width: 50%;
`;

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto 8px;
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
      <FooterListItem>
        <FooterListHeader>mgmt</FooterListHeader>
        <FooterListContent>
          <FooterListLink href="mailto:ari.fouriezos@managethis.net">
            ari.fouriezos@managethis.net
          </FooterListLink>
        </FooterListContent>
      </FooterListItem>
      <FooterListItem>
        <FooterListHeader>website</FooterListHeader>
        <FooterListContent>
          <FooterListLink href="https://github.com/ecozoic">
            ecozoic
          </FooterListLink>
        </FooterListContent>
      </FooterListItem>
    </FooterList>
  </StyledFooter>
);

export default Footer;
