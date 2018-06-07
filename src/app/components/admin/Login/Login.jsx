import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

import logo from '../../../../images/logo.png';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.purple} !important;
  color: ${props => props.theme.colors.white} !important;
`;

const Input = styled.input`
  &:focus {
    border-color: ${props => props.theme.colors.purple};
    box-shadow: 0 0 0 0.125em ${props => props.theme.colors.purpleTransparent};
  }
`;

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.purple};
  padding: ${props => props.theme.scale.huge}rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.scale.bigger}rem ${props => props.theme.scale.smaller}rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) and (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.scale.biggest}rem ${props => props.theme.scale.biggest}rem;
  }
`;

const LastField = styled.div`
  margin-bottom: ${props => props.theme.scale.big}rem !important;
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit = () => {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
          default:
            console.error(error.message);
        }
      });
  }

  render() {
    return (
      <section className="section">
        <Container className="container">
          <Logo src={logo} alt="Logo" />
          <form>
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-for */}
              <label htmlFor="email" className="label">Email</label>
              <p className="control has-icons-left">
                <Input
                  className="input"
                  id="email"
                  type="email"
                  onInput={this.handleEmailInput}
                />
                <span className="icon is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
            <LastField className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-for */}
              <label htmlFor="password" className="label">Password</label>
              <p className="control has-icons-left">
                <Input
                  className="input"
                  id="password"
                  type="password"
                  onInput={this.handlePasswordInput}
                />
                <span className="icon is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </LastField>
            <div className="field">
              <div className="control">
                <Button
                  className="button is-link"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </section>
    );
  }
}

export default Login;
