import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import people from "../assets/people.svg";
import wheel from "../assets/wheel.svg";
import windowIcon from "../assets/window.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={home} alt="home link" draggable={false} />
      </NavLink>
      <NavLink to="/">
        <img src={windowIcon} alt="home link" draggable={false} />
      </NavLink>
      <NavLink to="/">
        <img src={wheel} alt="home link" draggable={false} />
      </NavLink>
      <NavLink to="/">
        <img src={people} alt="home link" draggable={false} />
      </NavLink>
      <NavLink to="/">
        <img src={mail} alt="home link" draggable={false} />
      </NavLink>
    </nav>
  );
}
