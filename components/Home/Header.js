import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";


import "./Header.css";
import { Logo } from "../../assests";
export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="logo-image" />
      </div>
      <div className="nav-menu">
        <div className="nav-item">Home <IoMdArrowDropdown /></div>
        <div className="nav-item">Pages <IoMdArrowDropdown /></div>
        <div className="nav-item">Tracking <IoMdArrowDropdown /></div>
        <div className="nav-item">Services <IoMdArrowDropdown /></div>
        <div className="nav-item">Blog <IoMdArrowDropdown /></div>
      </div>
      <div className="button-menu">
        <button className="button-get-quote">Get a Quote</button>
        <button className="button-sign-in">Sign In</button>
      </div>
    </header>
  );
}