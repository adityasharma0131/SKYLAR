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

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63a127c8-ae35-4314-a1f4-04b85b2ea884");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the visible class
          } else {
            entry.target.classList.remove("visible"); // Remove the visible class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/src/assets/heroimg1.png", "/src/assets/heroimg5.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="homepage fade-in" id="home">
        <div className="hero-content">
          <div className="hero-slideshow">
            {images.map((img, index) => (
              <div
                key={index}
                className={`hero-image ${
                  currentImage === index ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
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
      <div className="weare fade-in" id="about">
        <div className="bgbox">
          <h2 className="heading1">About Us</h2>
          <hr />
          <div className="about-container">
            <div className="about-left">
              <h1 className="heading4">We are</h1>
              <h1 className="heading4" style={{ color: "#ec3223" }}>
                SKYLARK<sup>TM</sup>
              </h1>
              <h3 className="heading2">Your Complete Building Solution</h3>

              <img className="about-image" src={aboutpic} alt="" />
            </div>
            <div className="about-right">
              <h2 className="heading3">
                WHERE INNOVATION MEETS SUSTAINABILITY.
              </h2>
              <p className="para">
                SKYLARK is a trusted name in the construction industry, known
                for supplying high-quality Tile Adhesive and Block Jointer
                products. Committed to excellence, the company provides reliable
                materials designed to meet the diverse needs of masonry
                applications. With a strong focus on innovation, durability, and
                customer satisfaction, SKYLARK ensures that its products not
                only meet industry standards but also enhance the strength and
                longevity of construction projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-products fade-in" id="products">
        <div className="prbox">
          <h2 className="heading1">Our Products</h2>
          <hr />
          <div className="product-box ">
            {products.map((product) => (
              <div className="product-bgbox" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h1 className="heading">{product.title}</h1>
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
      <div className="contact-section fade-in" id="contact">
        <div className="contact-container">
          <h2 className="heading1">Reach out to us</h2>
          <p className="contact-subheading">
            Shoot us a message if you have any question, we're here to help!
          </p>
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="hidden"
                name="access_key"
                value="63a127c8-ae35-4314-a1f4-04b85b2ea884"
              />

              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder="Enter your Email"
                required
              />
            </div>
            <textarea
              className="contact-textarea"
              name="message"
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
      <div className="footer-map fade-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195.5592465869509!2d72.87121311156604!3d19.260268136642573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f27194fa11%3A0xd52f0613215a6c03!2sMetasky!5e1!3m2!1sen!2sin!4v1725545129996!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36497.424179615715!2d72.83539273898808!3d19.41975464136283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a88eb71a351b%3A0xfced7b21b607e0c6!2sJio-bp!5e1!3m2!1sen!2sin!4v1725562396327!5m2!1sen!2sin"
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
