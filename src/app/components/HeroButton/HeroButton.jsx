import styled from 'styled-components';

const HeroButton = styled.a`
  background-color: transparent;
  background-image: none;
  border: 4px solid rgba(19, 24, 29, .8);
  border-radius: 0;
  color: rgba(19, 24, 29, .8);
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
    background-color: #13181d;
    border-color: #639;
    color: #639;
    text-decoration: none;
  }

  &:active {
    background-color: #13181d;
    border-color: #639;
    color: #639;
    transition: none;
  }
`;

export default HeroButton;
