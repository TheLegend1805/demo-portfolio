import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-ryt">
          <div className="about-para">
            <p>
              A learning web developer, using react to build web pages. Starting
              web development with a basic portfolio website.
            </p>
            <p>
              Interested mostly in designing functional web pages and cloning
              exisitng websites using frameworks like React.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }}></hr>
            </div>
            <div className="about-skill">
              <p>NextJs</p>
              <hr style={{ width: "8%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>Gaining Expierence</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1st Mini Project</h1>
          <p>Portfolio Website</p>
        </div>
      </div>
    </div>
  );
};

export default About;
