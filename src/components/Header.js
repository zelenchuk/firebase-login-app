import React, { Component } from "react";

import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <header>
        <Navigation
          isAuth={this.props.isAuth}
          userLogout={this.props.userLogout}
        />
      </header>
    );
  }
}

export default Header;
