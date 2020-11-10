import React, { useState } from "react";
import "../scss/contact.scss";
import Footer from "./Footer";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid my-5">
        <div className="row">
          <h1 className="text-center">Contact Us</h1>
          <div className="col-8 col-md-6 col-lg-6 mx-auto">
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Full name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter you full name"
                  value={name}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone Number</label>
                <input
                  name="number"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mobile number"
                  value={number}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={inputHandler}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-info my-3"
                onClick={() => {
                  window.alert("form submitted successfully");
                }}
              >
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
