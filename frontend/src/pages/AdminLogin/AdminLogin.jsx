import React from "react";
import "./AdminLogin.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const AdminLogin = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className="admin-login">
                    <div className="admin-login-box">
                        <h4>Sign in to your admin account</h4>
                        <h6>Welcome back! please enter your details</h6>
                        <input required placeholder="E-mail" type="text" />
                        <input required placeholder="Password" type="password" />
                        <Button>Sign in</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminLogin;
