import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionHeader = styled.h2`
  border-bottom: 1px solid #639;
  color: #fff;
  font-size: 48px;
  font-weight: 400;
  margin: auto;
  margin-bottom: 10px;
  max-width: 200px;
  text-align: center;
`;

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1100px;
`;

const Section = props => (
  <StyledSection>
    <SectionHeader>{props.header}</SectionHeader>
    {props.children}
  </StyledSection>
);

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
