import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Adjust the path as needed
import WhatsAppButton from "../components/WhatsaapButton"; // Adjust the path as needed
import aboutpic from "../assets/aboutpic.png";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json") // This fetches the JSON from the public folder
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle scroll to show/hide the "Scroll to Top" button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigate to the Singpro page with product details
  const handleShowMore = (id) => {
    navigate(`/product/${id}`);
  };

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

              <img className="about-image" src={aboutpic} alt="" />
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
            {products.map((product) => (
              <div className="product-bgbox" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h1 className="heading1">{product.name}</h1>
                <p>{product.description}</p>
                <button onClick={() => handleShowMore(product.id)}>
                  Show More
                </button>
              </div>
            ))}
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
            <div>
              <button type="submit" className="contact-button">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.804820733738!2d72.95467599999999!3d19.2037254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f5c38d909d%3A0xbd382394b6bff4f7!2sOmega%20Business%20Park!5e0!3m2!1sen!2sin!4v1724338422171!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <ScrollToTop />
      <WhatsAppButton phoneNumber="9969929292" />{" "}
      {/* Replace with your actual WhatsApp number */}
    </>
  );
};

export default Home;
