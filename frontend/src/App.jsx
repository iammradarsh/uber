import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
