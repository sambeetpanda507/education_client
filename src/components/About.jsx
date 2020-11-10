import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import about from "../svg/about.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="home container my-3">
      <div className="row my-5 py-5">
        <div className="col-lg-6 my-5 d-flex justify-content-center align-align-items-center flex-column order-2 order-lg-1 p-3">
          <h1 className="font-font-weight-bold">
            Welcome to our about page{" "}
            <span role="img" aria-label="about">
              📝
            </span>
          </h1>
          <p className="mt-4 text-secondary">
            We don't want to push our ideas on to customers, we simply want to
            make what they want.
          </p>
          <div>
            <Link to="/contact">
              <button className="btn btn-outline-primary btn-lg contact__btn">
                contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 my-5 order-1 order-lg-2 p-3">
          <motion.img
            animate={{
              y: "-3vh",
              transition: { yoyo: Infinity, duration: 1.5 },
            }}
            src={about}
            alt="about"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
