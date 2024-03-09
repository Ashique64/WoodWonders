import React, { useState } from "react";
import "./Login.css";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import baseURL from "../../../api/api";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${baseURL}/login`, formData);
            const userid = response.data.user.id;
            navigate("/home");
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { status } = error.response;
                if (status === 400) {
                    setError("Username and password do not match.");
                } else if (status === 401) {
                    setError("User does not exist.");
                } else {
                    setError("An error occurred. Please try again later.");
                }
            } else {
                setError("An error occurred. Please check your internet connection.");
            }
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={7} className="login-child-1">
                    <h3 className="login-child-1-text">WoodWonders</h3>
                </Col>
                <Col md={5} className="login-child-2">
                    <div className="login-child-2-items">
                        <h3>Log in</h3>
                        <p>
                            Don't have an account yet? <Link to="/signup">Sign up</Link>
                        </p>
                        {error && <div className="error-message">{error}</div>}
                        <div className="login-child-2-form">
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
                                type={showPassword ? "text" : "password"}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEye : faEyeSlash}
                                onClick={PasswordVisibility}
                                size="sm"
                            />
                            <Button onClick={handleSubmit} disabled={loading}>
                                {loading ? (
                                    <>
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                        <span className="visually-hidden">Loading...</span>
                                    </>
                                ) : ("Log in")}
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
