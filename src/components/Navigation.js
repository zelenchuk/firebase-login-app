import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};

  render() {
    const classNameFunc = ({ isActive }) => (isActive ? "active_page" : "");

    return (
      <>
        {!this.props.isAuth ? (
          <nav>
            <NavLink className={classNameFunc} to="/">
              Login
            </NavLink>{" "}
            |{" "}
            <NavLink className={classNameFunc} to="/register">
              Register
            </NavLink>
          </nav>
        ) : (
          <a id="logout" onClick={() => this.props.userLogout()}>
            Logout
          </a>
        )}
      </>
    );
  }
}

export default Navigation;
