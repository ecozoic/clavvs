import styled from 'styled-components';

const HeroButton = styled.a`
  background-color: transparent;
  background-image: none;
  border: 4px solid ${props => props.theme.colors.blackTransparent};
  border-radius: 0;
  color: ${props => props.theme.colors.blackTransparent};
  cursor: pointer;
  display: inline-block;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0;
  outline: 0;
  padding: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  white-space: nowrap;

  &:active,
  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
    text-decoration: none;
  }

  &:active {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
    transition: none;
  }
`;

export default HeroButton;
