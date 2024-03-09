import React from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
    return (
        <Container-fluid>
            <Row className="footer-child-1">
                <div className="footer-child-1-items">
                    <div className="footer-child-1-items-1">
                        <h4>WoodWonders</h4>
                        <p>Furniture Store</p>
                    </div>
                    <div className="footer-child-1-items-2">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </Row>
            <Row className="footer-child-2">
                <hr />
                <div className="footer-child-2-items">
                    <div className="footer-child-2-items-1">
                        <p>copyright&copy;2024 Woodwonders. All right reserved</p>
                        <h6>Privacy policy</h6>
                        <h6>Terms of Use</h6>
                    </div>
                    <div className="footer-child-2-items-2">
                        <FontAwesomeIcon className="footer-icons" icon={faWhatsapp} />
                        <FontAwesomeIcon className="footer-icons" icon={faInstagram} />
                        <FontAwesomeIcon className="footer-icons" icon={faFacebook} />
                        <FontAwesomeIcon className="footer-icons" icon={faYoutube} />
                    </div>
                </div>
            </Row>
        </Container-fluid>
    );
};

export default Footer;
