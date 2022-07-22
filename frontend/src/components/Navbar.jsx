import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import pathContext from "../contexts/pathContext";
import userContext from "../contexts/userContext";
import "../styles/Navbar.scss";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import people from "../assets/people.svg";
import wheel from "../assets/wheel.svg";
import windowIcon from "../assets/window.svg";
import admin from "../assets/admin.svg";
import logout from "../assets/logout.svg";

const linksBase = [
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
  const { user } = useContext(userContext);
  const [links, setLinks] = useState([]);

  // NOT WORKING :((((
  // USINE A GAZ POUR PAS GRAND CHOSE >> PAS OPTI !
  useEffect(() => {
    // console.log("user", user);
    let userToCheck = user;

    if (!user || !Object.keys(user).includes("email"))
      userToCheck = JSON.parse(localStorage.getItem("user"));

    // console.log("userToCheck", userToCheck);
    const newLinks = linksBase;

    if (
      userToCheck?.is_admin &&
      !newLinks.map((link) => link.route).includes("/admin")
    )
      newLinks.push({
        route: "/admin",
        display: "admin panel",
        icon: admin,
      });

    if (
      userToCheck &&
      Object.keys(userToCheck).includes("email") &&
      !newLinks.map((link) => link.route).includes("/login")
    )
      newLinks.push({
        route: "/login",
        display: "login",
        icon: logout,
      });

    // console.log("newLinks", newLinks);
    // console.log(links.map((link) => link.route).join(""));
    // console.log(newLinks.map((link) => link.route).join(""));

    // if (
    //   links.map((link) => link.route).join("") !==
    //   newLinks.map((link) => link.route).join("")
    // ) {
    // console.log("****** UPDATING LINKS *******");
    setLinks(newLinks);
    // }
  });

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
