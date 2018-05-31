import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionHeader = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.scale.biggest}rem;
  margin-bottom: ${props => props.theme.scale.biggest}rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  text-align: center;
`;

const Section = props => (
  <section className="section">
    <div className="container">
      <SectionHeader>{props.header}</SectionHeader>
      {props.children}
    </div>
  </section>
);

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
