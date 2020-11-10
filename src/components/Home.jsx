import React from "react";
import "../scss/home.scss";
import Teacher from "../svg/teacher.svg";
import { motion } from "framer-motion";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home container my-3">
      <div className="row my-5 py-5">
        <div className="col-lg-6 my-5 d-flex justify-content-center align-align-items-center flex-column order-2 order-lg-1 p-3">
          <h1 className="font-font-weight-bold">
            An investment in knowledge pays the best interest{" "}
            <span role="img" aria-label="book">
              📚
            </span>
          </h1>
          <Typical
            className="mt-4 text-secondary"
            steps={[
              "",
              10,
              "Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength for our nation 🚀",
              10,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div className="col-lg-6 my-5 order-1 order-lg-2 p-3">
          <motion.img
            animate={{
              y: "-3vh",
              transition: { yoyo: Infinity, duration: 1.5 },
            }}
            src={Teacher}
            alt="teacher"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
