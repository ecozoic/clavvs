import styled from 'styled-components';

const HeroButton = styled.a`
  background-color: transparent;
  border: 4px solid ${props => props.theme.colors.blackTransparent};
  color: ${props => props.theme.colors.blackTransparent};
  text-align: center;
  text-transform: uppercase;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
  }

  &:active {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
  }
`;

export default HeroButton;
