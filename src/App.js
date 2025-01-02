// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Employer from "./components/Employer/Employer";
import EmployerRegistration from "./components/Employer/EmployerRegistration";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/employer-registration" element={<EmployerRegistration />} />
          {/* Add more routes for your app, such as Dashboard */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
