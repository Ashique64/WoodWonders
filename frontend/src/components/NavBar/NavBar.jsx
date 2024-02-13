import React from "react";
import "./NavBar.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <Container-fluid>
            <Row className="nav-row">
                <div className="nav">
                    <Col md={3} className="nav-child-1">
                        <h3>WoodWonders</h3>
                    </Col>
                    <Col md={6}>
                        <div className="nav-child-2">
                            <a href="">Home</a>
                            <a href="">Shop</a>
                            <a href="">About</a>
                            <a href="">Contact us</a>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="nav-child-3">
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHeart} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faUser} />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container-fluid>
    );
};

export default NavBar;
