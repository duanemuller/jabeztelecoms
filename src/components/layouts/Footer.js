import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6 col-sm-6">
              <h4>Paul Roux Artistic Showcase</h4>
              <ul className="list-unstyled">
                <li>Paul Roux</li>
                <li>Eastern Free State</li>
                <li>South Africa</li>
                <li>9800</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-6 col-sm-6">
              <h4>Artist Contact</h4>

              <NavLink className="nav-link text-uppercase" to="/lukascontact">
                Lukas Swanepoel
              </NavLink>

              <NavLink className="nav-link text-uppercase" to="/yulandacontact">
                Yulanda Cowley
              </NavLink>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Artist Website</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.lukaspinkflamingo.co.za">
                    Lukas Swanepoel website
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Social Media</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/paulrouxartisticshowcase">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()}{" "}
              <a href="https://duanemullerwebdesign.tk">
                Duane Muller Web Design & Development - All Rights Reserved
              </a>
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  a.nav-link {
    color: white;
  }
  a.nav-link:hover {
    color: darkblue;
  }

  ul li a {
    color: white;
  }

  ul li a:hover {
    color: darkblue;
  }
  a {
    color: black;
  }
  a:hover {
    color: darkblue;
  }
`;
