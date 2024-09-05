import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../assets/headerlogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          {/* Logo and Description */}
          <div className="footer-logo">
            <img src={logo} alt="Skylark Logo" />
            <p>Your Complete Building Solutions</p>
          </div>

          {/* Social Media Links */}
          {/* <div className="footer-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div> */}

          {/* Quick Links with HashLink */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link smooth to="/#home">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="/#about">
                  About Us
                </Link>
              </li>
              <li>
                <Link smooth to="/#products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link smooth to="/#contact">
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <FaPhone /> +91 9723923722
              </li>
              <li>
                <FaEnvelope /> example@gmail.com
              </li>
              <li>
                <MdLocationOn /> <a href="#">Google Location</a>
              </li>
            </ul>
          </div>

          {/* Embedded Google Map */}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>Skylark © 2024 All Rights Reserved | Design and Developed by XYZ</p>
      </div>
    </>
  );
};

export default Footer;
