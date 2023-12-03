import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import VerifyOTP from "./components/VerifyOTP";
import Quiz from "./components/Quiz";
import MainCard from "./components/MainCard";
import NewPassword from "./components/NewPassword";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/forms/login";
import Signup from "./components/forms/signup";
import Quiz2 from './components/Quiz2';
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";
import Quiz5 from "./components/Quiz5";
import UserContextProvider from "./context/UserContextProvider";
import Instruction from "./components/forms/instruction";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainCard />} />
          <Route path="/login/instruction/Quiz" element={<Quiz />} />
          <Route path="/login/instruction" element={<Instruction />} />
          <Route path="/login/instruction/Quiz2" element={<Quiz2 />} />
          <Route path="/login/instruction/Quiz3" element={<Quiz3 />} />
          <Route path="/login/instruction/Quiz4" element={<Quiz4 />} />
          <Route path="/login/instruction/Quiz5" element={<Quiz5 />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/login/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/login/forgotpassword/VerifyOTP"
            element={<VerifyOTP />}
          />
          <Route
            exact
            path="/login/forgotpassword/VerifyOTP/Newpassword"
            element={<NewPassword />}
          />
          <Route exact path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
