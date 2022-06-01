import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Routes>
          <Route
            activeClassName="active_page"
            path="/"
            element={<LoginForm />}
          />
          <Route
            activeClassName="active_page"
            path="register"
            element={<RegisterForm />}
          />
        </Routes>

        <Footer title="Zelenchuk Serhii &copy; 2022, Tbilisi" />
      </>
    );
  }
}

export default App;
