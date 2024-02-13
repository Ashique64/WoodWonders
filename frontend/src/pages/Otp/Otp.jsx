import React from "react";
import "./Otp.css";
import { Col, Container, Row, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate()

  const handleSubmit = () =>{
    navigate('/login')
}


  return (
    <Container-fluid>
      <Row>
        <Col md={7} className="sec-1">
          <h3 className="sec-1-text">WoodWonders</h3>
        </Col>
        <Col md={5} className="sec-2">
          <div className="sec-2-items">
            <h3>OTP</h3>
            <div className="sec-2-form">
              <input required placeholder="User Name" type="text" />
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container-fluid>
  );
};

export default Otp;
