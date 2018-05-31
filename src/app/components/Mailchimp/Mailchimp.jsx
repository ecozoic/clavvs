import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  margin: 0 auto;
  max-width: 800px;
`;

const Mailchimp = props => (
  <Form
    action={props.action}
    method="post"
    target="_blank"
    noValidate
  >
    <h2>{props.header}</h2>
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor="email" className="label">Email</label>
      <div className="control">
        <input
          id="email"
          name="EMAIL"
          type="email"
          className="input"
          placeholder="name@example.com"
        />
        <input
          type="hidden"
          name="b_6b3bedaf97619356c511dddb9_e1016c7f40"
          tabIndex="-1"
          value=""
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <button className="button is-link" type="submit">
          Submit
        </button>
      </div>
    </div>
  </Form>
);

Mailchimp.propTypes = {
  action: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default Mailchimp;
