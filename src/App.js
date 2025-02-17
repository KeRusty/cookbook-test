import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";

// Routes
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
