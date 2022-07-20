import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import pathContext from "../contexts/pathContext";
import "../styles/Navbar.scss";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import people from "../assets/people.svg";
import wheel from "../assets/wheel.svg";
import windowIcon from "../assets/window.svg";

export default function Navbar() {
  const { setPaths } = useContext(pathContext);

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        onClick={() => setPaths([{ display: "home", route: "/" }])}
      >
        <img src={home} alt="home link" draggable={false} />
      </NavLink>
      <NavLink
        to="/real"
        onClick={() => setPaths([{ display: "realisations", route: "/real" }])}
      >
        <img src={windowIcon} alt="realisation link" draggable={false} />
      </NavLink>
      <NavLink
        to="/tech"
        onClick={() => setPaths([{ display: "technos", route: "/tech" }])}
      >
        <img src={wheel} alt="technos link" draggable={false} />
      </NavLink>
      <NavLink
        to="/team"
        onClick={() => setPaths([{ display: "l'equipe", route: "/team" }])}
      >
        <img src={people} alt="team link" draggable={false} />
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() =>
          setPaths([{ display: "nous contacter", route: "/contact" }])
        }
      >
        <img src={mail} alt="contactus link" draggable={false} />
      </NavLink>
    </nav>
  );
}
