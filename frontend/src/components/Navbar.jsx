import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import pathContext from "../contexts/pathContext";
import "../styles/Navbar.scss";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import people from "../assets/people.svg";
import wheel from "../assets/wheel.svg";
import windowIcon from "../assets/window.svg";

const links = [
  {
    route: "/",
    display: "home",
    icon: home,
  },
  {
    route: "/real",
    display: "realisations",
    icon: windowIcon,
  },
  {
    route: "/tech",
    display: "technos",
    icon: wheel,
  },
  {
    route: "/team",
    display: "l'equipe",
    icon: people,
  },
  {
    route: "/contact",
    display: "nous contacter",
    icon: mail,
  },
];

export default function Navbar() {
  const { paths, setPaths } = useContext(pathContext);

  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavLink
          key={link.route}
          to={link.route}
          onClick={() =>
            setPaths([{ display: link.display, route: link.route }])
          }
        >
          <div className="sidebar-icon-container">
            <img
              className={`${paths[0]?.route === link.route ? "active" : ""} `}
              src={link.icon}
              alt={`${link.display} link`}
              draggable={false}
            />
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
