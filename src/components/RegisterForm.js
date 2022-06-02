import React, { Component } from "react";
import { Navigate } from "react-router-dom";

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

  render() {
    document.title = "Register | Firebase Login App";

    return (
      <main>
        {this.props.isAuth && <Navigate to="/" replace={true} />}

        <form onSubmit={this.onSubmit}>
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
          <input type="submit" value="Register" />
        </form>
      </main>
    );
  }
}

export default RegisterForm;
