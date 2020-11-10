import React from "react";

import { Link } from "react-router-dom";

function CollegeCards(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center gy-5">
        <div className="card" style={{ width: "34rem" }}>
          <img
            src={props.img}
            height="150"
            className="card-img-top"
            alt="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/" className="btn btn-outline-primary btn-lg">
              Check Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeCards;
