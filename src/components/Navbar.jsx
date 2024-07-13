import React, { useState } from "react";
import "./Navbar.css";
import "./DarkMode.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // const [modeToggle, setModeToggle] = useState("");
  // const toggleMode = () => {
  //   if (navbarToggle === "navbar") {
  //     setModeToggle(`navbar ${navbarToggle} diminished`);
  //   } else {
  //     setModeToggle("navbar");
  //   }
  // };
  const [navbarToggle, setnavbarToggle] = useState("navbar diminished");
  const toggleNavbar = () => {
    if (navbarToggle === "navbar") {
      setnavbarToggle("navbar diminished");
    } else {
      setnavbarToggle("navbar");
    }
  };

  return (
    <>
      <div className={navbarToggle}>
        <div className="logo-menu">
          <h1 className="navbar-logo">
            Top<span>Story</span>
          </h1>
          <i className="bx bx-menu toggle-diminish" onClick={toggleNavbar}></i>
        </div>
        <div className="search-box">
          <Link to="/" className="search-navigate">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={toggleNavbar}
            ></i>
          </Link>
          <input type="search" placeholder="Search..." />
        </div>
        <ul className="navbar-links">
          <li className="links link-selected">
            <Link to="/" className="navigate">
              <i className="bx bx-home-alt-2"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/sports" className="navigate">
              <i className="fa-solid fa-person-skiing"></i>
              <span>Sports</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/entertainment" className="navigate">
              <i className="bx bx-camera-movie"></i>
              <span>Entertainment</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/health" className="navigate">
              <i className="fa-regular fa-heart"></i>
              <span>Health</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/science" className="navigate">
              <i className="fa-solid fa-flask"></i>
              <span>Science</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/business" className="navigate">
              <i className="bx bx-dollar-circle"></i>
              <span>Business</span>
            </Link>
          </li>
          <li className="links">
            <Link to="/technology" className="navigate">
              <i className="fa-solid fa-robot"></i>
              <span>Technology</span>
            </Link>
          </li>
        </ul>
        <button className="toggle-mode" /*onClick={toggleMode}*/>
          <i className="bx bx-sun light"></i>
          {/* <i className="fa-regular fa-moon dark"></i>*/}
          <span>Dark Mode</span>
        </button>
      </div>
    </>
  );
};
