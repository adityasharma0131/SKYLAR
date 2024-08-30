import React from "react";

const Home = () => {
  return (
    <div className="homepage">
      <div className="hero-content">
        <div className="hero-image">
          {/* The background image will be styled via CSS */}
        </div>
        <div className="hero-data">
          <div className="hero-heading">
            <h1>
              SKYLAR <sup>TM</sup>
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
  );
};

export default Home;
