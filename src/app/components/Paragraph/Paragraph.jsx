import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: ${props => props.theme.scale.bigger}rem 0;
`;

const Header = styled.h3`
  font-size: ${props => props.theme.scale.big}rem;
  margin-bottom: ${props => props.theme.scale.big}rem;
`;

const Text = styled.p`
  display: block;
`;

const Paragraph = ({ header, text }) => (
  <Container>
    {header && <Header>{header}</Header>}
    {text && <Text>{text}</Text>}
  </Container>
);

Paragraph.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

Paragraph.defaultProps = {
  header: undefined,
  text: undefined,
};

export default Paragraph;
