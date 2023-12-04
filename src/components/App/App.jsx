import React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
