import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Turn as Hamburger } from 'hamburger-react'

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const navActiveStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid white" : "normal",
      paddingBottom: "22px",
    };
  };

  return (
    <div className="container-header">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <nav className="nav" ref={navRef}>
        <NavLink exact to="/" className="nav-item" style={navActiveStyle}>
          <span className="nav-item-span">00</span> Home
        </NavLink>
        <NavLink to="/destination" className="nav-item" style={navActiveStyle}>
          <span className="nav-item-span">01</span> Destination
        </NavLink>
        <NavLink to="/crew" className="nav-item" style={navActiveStyle}>
          <span className="nav-item-span">02</span> Crew
        </NavLink>
        <NavLink to="/technology" className="nav-item" style={navActiveStyle}>
          <span className="nav-item-span">03</span> Technology
        </NavLink>
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Header;