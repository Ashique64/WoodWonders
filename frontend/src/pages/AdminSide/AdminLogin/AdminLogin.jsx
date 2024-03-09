import React, { useState } from "react";
import "./AdminLogin.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../api/api";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        axios
            .post(`${baseURL}/admin_login`, formData)
            .then((response) => {
                console.log(response.data);
                navigate('/admin_home')
                setFormData({ username: "", password: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Container fluid>
            <Row>
                <Col md={12} className="admin-login">
                    <div className="admin-login-box">
                        <h4>Sign in to your admin account</h4>
                        <h6>Welcome back! please enter your details</h6>
                        <input
                            required
                            placeholder="User Name"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            type="text"
                        />
                        <input
                            required
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                        />
                        <Button onClick={handleLogin}>Sign in</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminLogin;
