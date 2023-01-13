import React from "react";
import Container from "react-bootstrap/Container";

import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="semi-footer bg-lightink">
        <Container>
          <h1>FIND THE TALENT NEEDED TO GET YOUR BUSINESS GROWING.</h1>
          <button>GET STARTED</button>
        </Container>
      </div>
      <div className="footer bg-ink">
        <Container>
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="footer-info d-flex flex-column flex-sm-row">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="footer-menu d-flex flex-column flex-sm-row">
                <div>
                  <label>CATEGORIES</label>
                  <p>GRAPHIC & DESIGN</p>
                  <p>VIDEO EDITING</p>
                </div>
                <div>
                  <label>ABOUT</label>
                  <p>PRIVACY POLICY</p>
                  <p>TERMS OF SERVICE</p>
                </div>
                <div>
                  <label>SUPPORT</label>
                  <p>HELP & SUPPORT</p>
                </div>
              </div>
            </div>
            <div className="footer-social">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="footer-copy">
            <p>@ALL COPY RIGHT ARE BELONG TO TRILLEST</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
