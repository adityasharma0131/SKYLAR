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
          <div className="footer-links">
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
          </div>

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
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.804820733738!2d72.95467599999999!3d19.2037254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f5c38d909d%3A0xbd382394b6bff4f7!2sOmega%20Business%20Park!5e0!3m2!1sen!2sin!4v1724338422171!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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
