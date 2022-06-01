import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    document.title = "Register | Firebase Login App";

    return (
      <main>
        <form>
          <h1>Register</h1>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <input type="submit" value="Register" />
        </form>
      </main>
    );
  }
}

export default RegisterForm;
