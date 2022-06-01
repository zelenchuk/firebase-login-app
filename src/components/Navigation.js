import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Register</Link>
      </nav>
    );
  }
}

export default Navigation;
