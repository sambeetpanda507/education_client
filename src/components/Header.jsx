import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import "../scss/header.scss";
import Logo from "../svg/college_logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div className="container-fluid nav__bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={Logo} alt="logo" height="60" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav__link"
                        activeClassName="link__active active"
                        to="/"
                        exact
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav__link"
                        activeClassName="link__active active"
                        to="/services"
                        exact
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <span
                        className="dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Courses
                      </span>
                      <ul
                        className="dropdown-menu text-center"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/computer science"
                          >
                            Coumputer Science
                            <span role="img" aria-label="cs">
                              💻
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/aeronautical"
                          >
                            Aeronautical
                            <span role="img" aria-label="aero">
                              ✈️
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/mechanical"
                          >
                            Mechanical
                            <span role="img" aria-label="mech">
                              🔧
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/electrical"
                          >
                            Electrical
                            <span role="img" aria-label="ee">
                              ⚡
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/electronics"
                          >
                            Electronics
                            <span role="img" aria-label="eee">
                              🔌
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/courses/automobile"
                          >
                            Automobile
                            <span role="img" aria-label="auto">
                              🚴‍♂️
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <span
                        className="dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Colleges
                      </span>
                      <ul
                        className="dropdown-menu text-center"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/odisha"
                          >
                            Odisha
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Maharashtra"
                          >
                            Maharashtra
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/West Bengal"
                          >
                            West Bengal
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Uttar Pradesh"
                          >
                            Uttar Pradesh
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Tamil Nadu"
                          >
                            Tamil Nadu
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Andhra Pradesh"
                          >
                            Andhra Pradesh
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/karnataka"
                          >
                            Karnataka
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Rajasthan"
                          >
                            Rajasthan
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            className="dropdown-item"
                            to="/colleges/Telangana"
                          >
                            Telangana
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav__link"
                        to="/about"
                        exact
                        activeClassName="link__active active"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav__link"
                        exact
                        to="/contact"
                        activeClassName="link__active active"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <NavLink to="/search" exact>
                    <IconButton>
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
