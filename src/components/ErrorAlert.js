import React, { Component } from "react";

class ErrorAlert extends Component {
  render() {
    return (
      <>
        <section id="error">{this.props.text}</section>
      </>
    );
  }
}

export default ErrorAlert;
