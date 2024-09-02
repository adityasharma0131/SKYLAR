import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";

const Home = () => {
  return (
    <>
      <div className="homepage" id="home">
        <div className="hero-content">
          <div className="hero-image">
            {/* The background image will be styled via CSS */}
          </div>
          <div className="hero-data">
            <div className="hero-heading">
              <h1>
                SKYLARK <sup>TM</sup>
              </h1>
            </div>
            <h3>
              Building <br /> Strong Foundations,
              <br /> One Block at a Time.
            </h3>
            <a style={{ "--clr": "#072f62" }} className="button" href="#">
              <span className="button__icon-wrapper">
                <svg
                  width="10"
                  className="button__icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  ></path>
                </svg>

                <svg
                  className="button__icon-svg button__icon-svg--copy"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  ></path>
                </svg>
              </span>
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="weare" id="about">
        <div className="bgbox">
          <h2 className="heading1">About Us</h2>
          <hr />
          <div className="about-container">
            <div className="about-left">
              <h1 className="heading4">We are</h1>
              <h1 className="heading4" style={{ color: "#ec3223" }}>
                SKYLARK<sup>TM</sup>
              </h1>
              <h3 className="heading2">ACC BLOCK AND BLOCK JOINTER</h3>
            </div>
            <div className="about-right">
              <h2 className="heading3">
                WHERE INNOVATION MEETS SUSTAINABILITY.
              </h2>
              <p className="para">
                Real Homes Developers, with 15 years of experience, excels in
                delivering high-quality residential, commercial, and industrial
                projects. Our unwavering commitment to precision, efficiency,
                and client satisfaction drives us to utilize cutting-edge
                techniques for seamless project execution from start to finish.
                Dedicated to exceeding expectations, we build enduring
                relationships based on trust, aiming to set the highest
                standards in construction while achieving long-term excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-products" id="products">
        <div className="prbox">
          <h2 className="heading1">Our Products</h2>
          <hr />
          <div className="product-box">
            <div className="product-bgbox">
              <img src={product1} alt="Product 1" />
              <h1>Product Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>Show More</button>
            </div>
            <div className="product-bgbox">
              <img src={product2} alt="Product 2" />
              <h1>Product Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>Show More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="heading1">Reach out to us</h2>
          <p className="contact-subheading">
            Shoot us a message if you have any question, we're here to help!
          </p>
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                className="contact-input"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Enter your Email"
                required
              />
            </div>
            <textarea
              className="contact-textarea"
              placeholder="Write your message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
