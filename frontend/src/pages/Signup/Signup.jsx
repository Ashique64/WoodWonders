import React, { useState } from "react";
import "./Signup.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();

    const baseURL = "http://127.0.0.1:8000";
    const [Password, setPassword] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const togglePasswordVisibility = () => {
        setPassword(!Password);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassword(!ConfirmPassword);
    };

    const [formData, setFormData] = useState({
        username: "",
        phone_number: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        switch(name) {
            case "user_name":
                setUserNameError("");
                break;
            case "phone_number":
                setPhoneNumberError("");
                break;
            case "email":
                setEmailError("");
                break;
            case "password":
                setPasswordError("");
                break;
            case "confirm_password":
                setConfirmPasswordError("");
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        if (formData.password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        }

        if (formData.password !== formData.confirm_password) {
            setConfirmPasswordError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(`${baseURL}/signup`, formData);
            navigate("/login");

            setUserNameError("");
            setPhoneNumberError("");
            setEmailError("");
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                if (responseData.error) {
                    setError(responseData.error);
                } else {
                    if (responseData.username) {
                        setUserNameError(responseData.username[0]);
                    }
                    if (responseData.phone_number) {
                        setPhoneNumberError(responseData.phone_number[0]);
                    }
                    if (responseData.email) {
                        setEmailError(responseData.email[0]);
                    }
                }
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    const handleAlreadyLogin = () => {
        navigate("/login")
    }

    return (
        <Container fluid>
            <Row>
                <Col md={7} className="child-1">
                    <h3 className="child-1-text">WoodWonders</h3>
                </Col>
                <Col md={5} className="child-2">
                    <div className="child-2-items">
                        <h3>Sign up</h3>
                        <p>
                            Already have an account? <a onClick={handleAlreadyLogin} href="">Log in</a>
                        </p>
                        <div className="child-2-form">
                            {userNameError && <div className="error-message">{userNameError}</div>}
                            <input
                                required
                                name="username"
                                placeholder="User Name"
                                value={formData.username}
                                onChange={handleChange}
                                type="text"
                            />
                            {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
                            <input
                                required
                                name="phone_number"
                                placeholder="Phone Number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                type="tel"
                            />
                            {emailError && <div className="error-message">{emailError}</div>}
                            <input
                                required
                                name="email"
                                placeholder="E-mail Address"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                            />
                            {passwordError && <div className="error-message">{passwordError}</div>}
                            <input
                                required
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                type={Password ? "text" : "password"}
                            />
                            <FontAwesomeIcon
                                icon={Password ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                size="sm"
                            />
                            {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                            <input
                                required
                                name="confirm_password"
                                placeholder="Confirm Password"
                                type={ConfirmPassword ? "text" : "password"}
                                value={formData.confirm_password}
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon
                                icon={ConfirmPassword ? faEye : faEyeSlash}
                                onClick={toggleConfirmPasswordVisibility}
                                size="sm"
                            />

                            {error && <div className="error-message">{error}</div>}
                            <Button onClick={handleSubmit}>Sign up</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
