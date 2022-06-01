import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    document.title = "Login | Firebase Login App";

    return (
      <main>
        <form>
          <h1>Login</h1>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <input type="submit" value="Login" />
        </form>
      </main>
    );
  }
}

export default LoginForm;
