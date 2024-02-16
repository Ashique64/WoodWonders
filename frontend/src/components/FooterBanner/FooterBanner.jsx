import React from "react";
import "./FooterBanner.css";
import { Col, Row } from "react-bootstrap";

const FooterBanner = () => {
    return (
        <Containe-fluid>
            <Row>
                <Col md={6} className="footer-banner-child-1">
                    <img src="\Images\static\nicolas-hoizey-yBNIf_ny6Ro-unsplash.jpg" alt="Footer-Banner-pic" />
                </Col>
                <Col md={6} className="footer-banner-child-2">
                    <div className="footer-banner-child-2-items">
                        <h6>SAVE UP TO 35% OFF</h6>
                        <h3>HUNDREDS of <br /> New lower prices !</h3>
                        <p>It's more affordable than ever to give every room in your home a stylish makeover</p>
                        <a href="">Shop Now  &rarr;</a>
                    </div>
                </Col>
            </Row>
        </Containe-fluid>
    );
};

export default FooterBanner;
