import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import './footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="ftr-txt">
          <div className="ftr-img">
            <img
              className="brand-logo"
              src={logo}
              alt="Pizza-logo"
            />
          </div>
          <div className="link-div">
              <div className="links"><Link to='/disclaimer'>Disclaimer</Link></div>
              <div className="links"><Link to='/privace-policy'>Privace Policy</Link></div>
              <div className="links"><Link to='/faq'>Faq</Link> </div>
              <div className="links"><Link to='term&cond'>Terms &amp; Conditions</Link></div>
              <div className="links"><Link to='feedback'>Feedback</Link></div>
            </div>
        </div>

        <div className="copyright">
          All Rights Reserved. Copyright © pizza-delivery Ltd.
        </div>
      </div>
    </>
  );
};

export default Footer;
