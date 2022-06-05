import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase-config";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
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
    emailVerified: false,

    errors: false,
    loading: true,
  };

  handleFormAction = (context, email, password) => {
    // Update App state
    this.setState(
      () => ({
        email: email,
        password: password,
        loading: false,
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

  userLogin = async (email, password) => {
    this.setState({ loading: true });

    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );

        sessionStorage.setItem("Auth Email", email);

        this.setState({ isAuth: true, loading: false });
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.setState({ errors: errorMessage, loading: false });
      });
  };

  userRegister = async (email, password) => {
    this.setState({ loading: true });

    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response); // TODO need to inform user when success and when we have errors
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        sessionStorage.setItem("Auth Email", email);

        this.setState({ isAuth: true, loading: false });

        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("Email verification sent!");
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log("Error sendEmailVerification", errorMessage);
          });
      })
      .catch((error) => {
        // console.log(error.message);
        // const errorCode = error.code;
        const errorMessage = error.message;

        this.setState({ errors: errorMessage, loading: false });
      });
  };

  checkAuth = async (auth) => {
    this.setState({ loading: true });

    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User data: ", user);
        // console.log("Online: ", user.email);

        if (user.emailVerified) {
          this.setState({ emailVerified: true, loading: false });
        } else {
          this.setState({ loading: false });
        }
      } else {
        // console.log("User logged out!");

        this.setState({ isAuth: false, loading: false });
        sessionStorage.clear();
      }
    });
  };

  userLogout = () => {
    this.setState({ loading: true });

    sessionStorage.clear();
    this.setState({ isAuth: false, loading: false });
  };

  componentDidMount() {
    // If we have auth token we set state isAuth - true
    const authToken = sessionStorage.getItem("Auth Token");
    if (authToken) this.setState({ isAuth: true });

    this.checkAuth(auth);
  }

  componentDidUpdate(prevProps, prevState) {
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

    if (prevState.isAuth == !this.state.isAuth) {
      this.checkAuth(auth);
    }
  }

  render() {
    return (
      <>
        <Header userLogout={this.userLogout} isAuth={this.state.isAuth} />

        {this.state.errors && <ErrorAlert text={this.state.errors} />}

        <Routes>
          <Route
            activeClassName="active_page"
            path="dashboard"
            element={
              <Dashboard
                loading={this.state.loading}
                emailVerified={this.state.emailVerified}
                isAuth={this.state.isAuth}
              />
            }
          />

          <Route
            activeClassName="active_page"
            path="/"
            element={
              <LoginForm
                loading={this.state.loading}
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
                loading={this.state.loading}
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
