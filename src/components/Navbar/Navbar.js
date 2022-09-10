import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <ul className="navLinks">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>{" "}
        <li>
          <a href="#contact">Contact</a>
        </li>{" "}
      </ul>
      <div className="navLogin">
        <a href="#redirect">Start</a>
      </div>
    </div>
  );
};

export default Navbar;
