import React from "react";

import "../styles/layout/footer.scss";
import { NAVIGATION } from "../utils/constants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-upper">
        <div className="footer-item">
          <h5>Funiro.</h5>
          <p className="address">
            400 University Drive Suite 200 Coral <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-item">
          <span className="footer-muted-title">Links</span>

          <nav className="footer-navigation">
            <ul>
              {NAVIGATION.map((nav, index) => (
                <li key={index}>
                  <Link to={nav.route}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-item">
          <span className="footer-muted-title">Help</span>

          <nav className="footer-navigation">
            <ul>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-item">
          <span className="footer-muted-title">Newsletter</span>
          <div className="newsItems">
            <input type="text" placeholder="Enter Your Email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-lower">
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
