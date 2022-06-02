import React, { Component } from "react";

import { Navigate } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { handleFormAction } = this.props;
    const { email, password } = this.state;

    handleFormAction("LOGIN", email, password);
  };

  render() {
    document.title = "Login | Firebase Login App";

    return (
      <main>
        {this.props.isAuth && <Navigate to="/dashboard" replace={true} />}

        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <input
            autoFocus
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input type="submit" value="Login" />
        </form>
      </main>
    );
  }
}

export default LoginForm;
