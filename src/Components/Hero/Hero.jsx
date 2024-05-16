import React, { useRef, useState } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = 0;
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div id="home" className="hero" onClick={closeMenu}>
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Vaibhav N Acharya,</span> frontend developer.
      </h1>
      <p>I am frontend developer from Bangalore, starting as a fresher.</p>
      <div className="hero-action">
        <AnchorLink className="connect-link" offset={50} href="#contact">
          <div
            onClick={() => {
              setMenu("contact");
            }}
          >
            Connect With Me
          </div>
        </AnchorLink>

        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
