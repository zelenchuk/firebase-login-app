import React, { Component } from "react";

import { Navigate } from "react-router-dom";

import Loader from "./Loader";

class ServicesList extends Component {
  render() {
    return (
      <div id="actions_block">
        <div className="action_item">Service 1</div>
        <div className="action_item">Service 2</div>
        <div className="action_item">Service 3</div>
        <div className="action_item">Service 4</div>
        <div className="action_item">Service 5</div>
        <div className="action_item">Service 6</div>
      </div>
    );
  }
}

class VerifyEmailMessage extends Component {
  render() {
    return (
      <p
        style={{
          background: "orange",
          padding: "20px",
          fontSize: "19px",
          borderRadius: "9px",
          color: "#d23d3d",
        }}
      >
        Please verify your email-address for full access to our services (check
        to 'spam' too)
      </p>
    );
  }
}

class Dashboard extends Component {
  render() {
    document.title = "Dashboard | Firebase Login App";

    const userEmail = sessionStorage.getItem("Auth Email");

    return (
      <>
        {this.props.isAuth === false && <Navigate to="/" replace={true} />}

        {!this.props.loading ? (
          <div>
            <main id="dashboard">
              <h1>Dashboard</h1>

              <p>
                Welcome, <strong>{userEmail}</strong>
              </p>

              {!this.props.emailVerified ? (
                <VerifyEmailMessage />
              ) : (
                <ServicesList />
              )}
            </main>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Dashboard;
