import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle menu visibility
  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Close the menu
  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  // Scroll handler to show/hide header
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`} id="header">
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="Logo" />

        <div
          className={`nav__menu ${menuVisible ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                smooth
                to="/#home"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                <RiArrowRightUpLine />
                <span>Home</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                smooth
                to="/#about"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                <RiArrowRightUpLine />
                <span>About Us</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                smooth
                to="/#products"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                <RiArrowRightUpLine />
                <span>Products</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                smooth
                to="/#contact"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                <RiArrowRightUpLine />
                <span>Contact</span>
              </Link>
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
