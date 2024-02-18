import React, { useState } from "react";
import "./Signup.css";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();

    // const baseURL='http://127.0.0.1:8000'
    const [Password, setPaswword] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);

    const PasswordVisibility = () => {
        setPaswword(!Password);
    };

    const ConfirmPasswordVisibility = () => {
        setConfirmPassword(!ConfirmPassword);
    };

    // const [formData, setFormData] = useState({
    //     userName : '',
    //     phoneNumber : '',
    //     email : '',
    //     password : '',
    //     confirmPassword : ''
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // }

    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post(`${baseURL}/signup`, formData)
    //         console.log(response.data)
    //         navigate('/otp')
    //     } catch (error) {
    //         console.error('Error:', error)
    //     }
    // }

    const handleSubmit = () => {
        navigate("/otp");
    };

    return (
        <Container-fluid>
            <Row>
                <Col md={7} className="child-1">
                    <h3 className="child-1-text">WoodWonders</h3>
                </Col>
                <Col md={5} className="child-2">
                    <div className="child-2-items">
                        <h3>Sign up</h3>
                        <p>
                            Already have an account? <a href="">Log in</a>
                        </p>
                        <div className="child-2-form">
                            <input required name="userName" placeholder="User Name" type="text" />
                            <input required name="phoneNumber" placeholder="Phone Number" type="phone" />
                            <input required name="email" placeholder="E-mail Address" type="email" />
                            <input required name="password" placeholder="Password" type={Password ? "text" : "password"} />
                            <FontAwesomeIcon icon={Password ? faEye : faEyeSlash} onClick={PasswordVisibility} size="sm" />
                            <input
                                required
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                type={ConfirmPassword ? "text" : "password"}
                            />
                            <FontAwesomeIcon
                                icon={ConfirmPassword ? faEye : faEyeSlash}
                                onClick={ConfirmPasswordVisibility}
                                size="sm"
                            />
                            <Button onClick={handleSubmit}>Sign up</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container-fluid>
    );
};

export default Signup;
