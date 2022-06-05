import React, { Component } from "react";

import loader from "../loader.gif";

class Loader extends Component {
  render() {
    return (
      <div id="loader">
        <img src={loader} />
      </div>
    );
  }
}

export default Loader;
