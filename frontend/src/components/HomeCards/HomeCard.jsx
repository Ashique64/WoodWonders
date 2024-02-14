import React from "react";
import "./HomeCard.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faPhoneAlt, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const HomeCard = () => {
    return (
        <Container-fluid>
            <Row className="home-card">
                <Col className="home-card-1">
                    <div className="home-card-2">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="home-card-icon" />
                        <h5>Money-back</h5>
                        <p>30 days guarantee</p>
                    </div>
                </Col>
                <Col className="home-card-1">
                    <div className="home-card-2">
                    <FontAwesomeIcon icon={faShieldAlt} className="home-card-icon" />
                    <h5>Secure Payments</h5>
                    <p>Secured by Strips</p>
                    </div>
                </Col>
                <Col className="home-card-1">
                    <div className="home-card-2">
                    <FontAwesomeIcon icon={faPhoneAlt} className="home-card-icon" />
                    <h4>24/7 Supports</h4>
                    <p>Phone and E-mail support</p>
                    </div>
                </Col>
            </Row>
        </Container-fluid>
    );
};

export default HomeCard;
