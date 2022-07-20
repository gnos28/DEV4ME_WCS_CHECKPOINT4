import React from "react";
import Path from "./Path";
import "../styles/Header.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="dev4me logo" draggable={false} />
      <Path />
    </header>
  );
}
