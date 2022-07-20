import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>Mentions légales 2021-{currentYear} ©dev4.me</footer>;
}
