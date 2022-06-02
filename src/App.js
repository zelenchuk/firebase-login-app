import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import { app } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";

import ErrorAlert from "./components/ErrorAlert";

class App extends Component {
  state = {
    email: "",
    password: "",

    isAuth: false,
    errors: false,
  };

  userLogin = async (email, password) => {
    const authentication = getAuth();

    await signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );

        sessionStorage.setItem("Auth Email", email);

        this.setState({ isAuth: true });
      })
      .catch((error) => {
        // alert(error.message);
        this.setState({ errors: error.message });
      });
  };

  userRegister = async (email, password) => {
    // console.log("Trigger Register in App", email, password);

    const authentication = getAuth();

    await createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response); // TODO need to inform user when success and when we have errors
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        sessionStorage.setItem("Auth Email", email);

        this.setState({ isAuth: true });
      })
      .catch((error) => {
        // console.log(error.message);
        this.setState({ errors: error.message });
      });
  };

  userLogout = () => {
    sessionStorage.clear();
    this.setState({ isAuth: false });
  };

  handleFormAction = (context, email, password) => {
    // Update App state
    this.setState(
      () => ({
        email: email,
        password: password,
      }),

      // After state updated (callback)
      () => {
        const { email, password } = this.state;

        if (context === "REGISTER") {
          this.userRegister(email, password);
        }

        if (context === "LOGIN") {
          this.userLogin(email, password);
        }
      }
    );
  };

  componentDidMount() {
    // If we have auth token we set state isAuth - true
    const authToken = sessionStorage.getItem("Auth Token");
    if (authToken) this.setState({ isAuth: true });
  }

  componentDidUpdate() {
    // Debug Auth contex in App
    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      console.log("Auth ready");
    } else {
      console.log("Not Auth user");
    }

    if (this.state.errors) {
      setTimeout(() => this.setState({ errors: false }), 3500);
    }
  }

  render() {
    return (
      <>
        <Header />

        {this.state.errors && <ErrorAlert text={this.state.errors} />}

        <Routes>
          <Route
            activeClassName="active_page"
            path="dashboard"
            element={
              <Dashboard
                isAuth={this.state.isAuth}
                userLogout={this.userLogout}
              />
            }
          />

          <Route
            activeClassName="active_page"
            path="/"
            element={
              <LoginForm
                handleFormAction={this.handleFormAction}
                isAuth={this.state.isAuth}
              />
            }
          />

          <Route
            activeClassName="active_page"
            path="register"
            element={
              <RegisterForm
                handleFormAction={this.handleFormAction}
                isAuth={this.state.isAuth}
              />
            }
          />
        </Routes>

        <Footer title="Zelenchuk Serhii &copy; 2022, Tbilisi" />
      </>
    );
  }
}

export default App;
