import React, { useState } from "react";
import logo from "../assets/headerlogo.png";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiMenuLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const ResponsiveNavbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="Logo" />

        <div
          className={`nav__menu ${menuVisible ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <RiArrowRightUpLine />
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <RiArrowRightUpLine />
                <span>About Us</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Projects</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Studio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Contact</span>
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
            <RiCloseLine />
          </div>

          <div className="nav__social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <RiInstagramLine />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <RiDribbbleLine />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <RiLinkedinBoxLine />
            </a>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
};

export default ResponsiveNavbar;
