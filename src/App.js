import React, { Component } from "react";

import { Link, Routes, Route } from "react-router-dom";

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
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
