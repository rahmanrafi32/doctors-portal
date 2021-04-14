import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link mr-5" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="#">
              Dental Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;