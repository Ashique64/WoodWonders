import React from "react";
import "./AdminDashboard.css";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import { Col, Container, Row } from "react-bootstrap";

const AdminDashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <AdminSidebar />
                </Col>
                <Col md={10} className="d-flex justify-content-center align-items-center">
                    <h5>Hello World</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
