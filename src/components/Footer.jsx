import React from "react";
import "../scss/footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div data-aos="fade-up" className="footer mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
        <path
          fill="#04091E"
          fillOpacity="1"
          d="M0,160L17.1,149.3C34.3,139,69,117,103,117.3C137.1,117,171,139,206,160C240,181,274,203,309,192C342.9,181,377,139,411,133.3C445.7,128,480,160,514,160C548.6,160,583,128,617,117.3C651.4,107,686,117,720,112C754.3,107,789,85,823,90.7C857.1,96,891,128,926,170.7C960,213,994,267,1029,245.3C1062.9,224,1097,128,1131,112C1165.7,96,1200,160,1234,170.7C1268.6,181,1303,139,1337,112C1371.4,85,1406,75,1423,69.3L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      <div style={{ backgroundColor: "#04091E" }}>
        <div className="container p-3">
          <div className="row">
            <div className="col-md-4">
              <ul style={{ listStyle: "none" }} className="footer__links">
                <h2 className="text-light">Top Products</h2>
                <li>Managed Website</li>
                <li>Manage Reputation</li>
                <li>Power Tools</li>
                <li>Marketing Service</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul style={{ listStyle: "none" }} className="footer__links">
                <h2 className="text-light">Quick Links</h2>
                <li>Jobs</li>
                <li>Brand Assets</li>
                <li>Investor Relations</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul style={{ listStyle: "none" }} className="footer__links">
                <h2 className="text-light">Resources</h2>
                <li>Guides</li>
                <li>Research</li>
                <li>Experts</li>
                <li>Agencies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid py-2">
          <div className="row">
            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
              <p id="copyright" className="text-light font-weight-bold">
                Copyright ©2020 All rights reserved
              </p>
            </div>
            <div className="col-md-6 text-center">
              <IconButton>
                <FacebookIcon className="text-white" fontSize="large" />
              </IconButton>
              <IconButton>
                <TwitterIcon className="text-white" fontSize="large" />
              </IconButton>
              <IconButton>
                <MailIcon className="text-white" fontSize="large" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-white" fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
