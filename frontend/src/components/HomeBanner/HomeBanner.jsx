import React from "react";
import "./HomeBanner.css";
import { Col, Row } from "react-bootstrap";

const HomeBanner = () => {
    return (
        <Container-fluid>
            <Row className="home-banner-child-1">
                <img src="/Images/static/sidekix-media-WgkA3CSFrjc-unsplash.jpg" alt="HomeBanner" />
            </Row>
            <Row className="home-banner-child-2">
                <Col md={6}>
                    <h1>
                        India's <br />
                        Finest Online <br />
                        Furniture Brand
                    </h1>
                </Col>
                <Col md={6}>
                    <p>
                        Explore the timeless allure of <strong>WoodWonders</strong>, where every piece tells a story of craftsmanship,
                        elegance, and the natural beauty of fine wood. Elevate your space with the artistry of furniture
                        that transcends trends, making every room a sanctuary of style and comfort.
                    </p>
                </Col>
            </Row>
        </Container-fluid>
    );
};

export default HomeBanner;
