import React from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.css";
export default function LogoRD() {
  return (
    <a href="//www.google.com">
      <img className="image" alt="logo" src={Logo} />
    </a>
  );
}
