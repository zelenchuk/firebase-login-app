import React, { Component } from "react";

import { Navigate } from "react-router-dom";

class Dashboard extends Component {
  componentDidUpdate() {}

  render() {
    document.title = "Dashboard | Firebase Login App";

    const userEmail = sessionStorage.getItem("Auth Email");

    return (
      <>
        {this.props.isAuth === false && <Navigate to="/" replace={true} />}

        <main id="dashboard">
          <h1>Dashboard</h1>
          <p>Welcome, {userEmail}</p>
          <div id="actions_block">
            <div className="action_item">Service 1</div>
            <div className="action_item">Service 2</div>
            <div className="action_item">Service 3</div>
            <div className="action_item">Service 4</div>
            <div className="action_item">Service 5</div>
            <div className="action_item">Service 6</div>
          </div>
          <a onClick={() => this.props.userLogout()}>Logout</a>
        </main>
      </>
    );
  }
}

export default Dashboard;
