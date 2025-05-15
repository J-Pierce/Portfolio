import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../Css/App.css";

import Home from "./Home";
import Project from "./projects/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:project" element={<Project />} />
        <Route path="/*" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
