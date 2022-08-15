import React from "react";
import DropdownMenu from "../DropdownMenu";
import LogoRD from "../Logo";
import MenuItem from "../MenuItem";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <LogoRD/>
      <MenuItem
      link={"https://www.rdstation.com/"}
      text={"Menu 1"}
      />
      <DropdownMenu/>
    </header>
  );
}
