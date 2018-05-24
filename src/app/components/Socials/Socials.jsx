import React from 'react';
import styled from 'styled-components';

const SocialsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-bottom: 80px;
`;

const SocialsListItem = styled.li`
  & > a {
    color: #fff;
    display: block;
    font-size: 72px;
    margin: 0 10px;

    &:hover {
      color: #639;
    }
  }
`;

const Socials = () => (
  <SocialsList>
    <SocialsListItem>
      <a href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
        <i className="fa fa-fw fa-spotify" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://www.facebook.com/clavvsatl">
        <i className="fa fa-fw fa-facebook" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://twitter.com/clavvsatl">
        <i className="fa fa-fw fa-twitter" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://www.instagram.com/clavvsatl">
        <i className="fa fa-fw fa-instagram" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://www.youtube.com/user/clawsatl">
        <i className="fa fa-fw fa-youtube" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://soundcloud.com/clavvsatl">
        <i className="fa fa-fw fa-soundcloud" />
      </a>
    </SocialsListItem>
    <SocialsListItem>
      <a href="https://clavvs.bandcamp.com/">
        <i className="fa fa-fw fa-bandcamp" />
      </a>
    </SocialsListItem>
  </SocialsList>
);

export default Socials;
