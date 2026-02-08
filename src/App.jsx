import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Certification from "./pages/Certification";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="container layout">
        {/* Main content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
