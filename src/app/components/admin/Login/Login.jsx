import React, { Component } from 'react';
import firebase from 'firebase/app';

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
        console.error(error);
      });
  }

  render() {
    return (
      <form>
        <div className="container">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="email" className="label">Email</label>
            <div className="control">
              <input
                className="input"
                id="email"
                type="email"
                onInput={this.handleEmailInput}
              />
            </div>
          </div>
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="password" className="label">Password</label>
            <div className="control">
              <input
                className="input"
                id="password"
                type="password"
                onInput={this.handlePasswordInput}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                type="button"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
