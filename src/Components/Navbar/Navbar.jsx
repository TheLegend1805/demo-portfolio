import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img
        className="navbar-img"
        onClick={() => setMenu("home")}
        src={logo}
        alt=""
      />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          src={menu_close}
          onClick={closeMenu}
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        {/*<li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("mywork")}>MyWork</p>
          </AnchorLink>
          {menu === "mywork" ? <img src={underline} /> : <></>}
  </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} /> : <></>}
        </li>*/}
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div onClick={() => setMenu("contact")} className="nav-connect">
          Connect With Me
        </div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
