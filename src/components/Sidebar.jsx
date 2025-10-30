import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // make sure to create this file

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="home-arrow">
        ←
      </Link>
    </div>
  );
}
