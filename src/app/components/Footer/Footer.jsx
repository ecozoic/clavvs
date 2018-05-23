import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #13181d;
  border-top: 1px solid #639;
  clear: both;
  color: #666;
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
  color: #666;
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto 8px;
`;

const FooterListContent = styled.p`
  color: #fff;
`;

const FooterListLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color .3s ease;

  &:hover {
    color: #639;
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
