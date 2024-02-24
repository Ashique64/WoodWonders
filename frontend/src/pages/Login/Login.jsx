import React, { useState } from "react";
import "./Login.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const baseURL = "http://127.0.0.1:8000";
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
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

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${baseURL}/login`, formData);
            const userid = response.data.user.id;

            navigate("/login");
        } catch (error) {
            // Handle error here
            console.error("Error:", error);
        }
    };

    const handleForgotPass = () => {
        navigate("/forgotpass");
    };

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
                            <input
                                required
                                placeholder="User Name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                type="text"
                            />
                            <input
                                required
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type={Password ? "text" : "password"}
                            />
                            <FontAwesomeIcon icon={Password ? faEye : faEyeSlash} onClick={PasswordVisibility} size="sm" />
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
