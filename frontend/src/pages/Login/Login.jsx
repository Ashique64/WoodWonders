import React, { useState } from "react";
import "./Login.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [Password, setPaswword] = useState(false);

  const PasswordVisibility = () => {
    setPaswword(!Password)
  }

  const handleSubmit = () => {
    navigate("/home")
  }

  const handleForgotPass = () => {
    navigate("/forgotpass")
  }

  return (
    <Container-fluid>
      <Row>
        <Col md={7} className="login-child-1">
          <h3 className="login-child-1-text">WoodWonders</h3>
        </Col>
        <Col md={5} className="login-child-2">
          <div className="login-child-2-items">
            <h3>Log in</h3>
            <p>
              {" "}
              Don't have an account yet? <a href="">Sign up</a>{" "}
            </p>
            <div className="login-child-2-form">
              <input required placeholder="User Name" type="text" />
              <input
                required
                placeholder="Password"
                type={Password ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={Password ? faEye : faEyeSlash}
                onClick={PasswordVisibility}
                size="sm"
              />
              <h6 onClick={handleForgotPass}>Forgot password?</h6>
              <Button onClick={handleSubmit}>Log in</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container-fluid>
  );
};

export default Login;
