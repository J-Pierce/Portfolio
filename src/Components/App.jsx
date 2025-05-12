import React from "react";
import { Routes, Route } from "react-router-dom";
import "../Css/App.css";

import Home from "./Home";
import Project from "./Project.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:project" element={<Project />} />
    </Routes>
  );
}

export default App;
