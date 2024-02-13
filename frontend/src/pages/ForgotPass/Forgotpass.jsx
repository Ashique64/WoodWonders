import React from "react";
import "./Forgotpass.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Forgotpass = () => {

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <Container-fluid>
      <Row>
        <Col md={7} className="forgot-child-1">
          <h3 className="forgot-child-1-text">WoodWonders</h3>
        </Col>
        <Col md={5} className="forgot-child-2">
          <div className="forgot-child-2-items">
            <h3>Forgot Password</h3>
            <p>
              Enter your registered email address we'll send you a link to reset
              your password
            </p>
            <div className="forgot-child-2-form">
              <input
                required
                placeholder="Enter yout registered E-mail"
                type="email"
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container-fluid>
  );
};

export default Forgotpass;
