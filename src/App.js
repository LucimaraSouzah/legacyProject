import Login from "./pages/Login";
import Register from "./pages/Register";
import Password from "./pages/Password";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/password" element={<Password />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
