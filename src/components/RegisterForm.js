import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import Loader from "./Loader";

class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { handleFormAction } = this.props;
    const { email, password } = this.state;

    handleFormAction("REGISTER", email, password);
  };

  componentWillUnmount() {
    // clear error message when user go to next url
    this.props.errorsOff();
  }

  render() {
    document.title = "Register | Firebase Login App";

    return (
      <>
        {this.props.isAuth && <Navigate to="/dashboard" replace={true} />}

        {!this.props.loading ? (
          <main>
            <form autoComplete="off" onSubmit={this.onSubmit}>
              <h1>Register</h1>
              <input
                autoFocus
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />

              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <input
                type="submit"
                value="Register"
                disabled={this.props.errors}
              />
            </form>
          </main>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default RegisterForm;
