import React from "react";
import "./AdminUser.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import Table from "react-bootstrap/Table";

const AdminUser = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <AdminSidebar />
                </Col>
                <Col md={10} className="admin-user p-4">
                    <Row className="admin-user-child-1">
                        <div className="admin-user-child-1-items">
                            <h5 className="d-inline-flex">All Users</h5>
                            <select name="" id="">
                                <option value="">Date</option>
                            </select>
                        </div>
                    </Row>
                    <Row className="admin-user-child-2">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>E-mail</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ashiq</td>
                                    <td>Ashiq@gmail.com</td>
                                    <td>1234567890</td>
                                    <td>
                                        <Button className="me-5 bg-danger">Block</Button>
                                        <Button>Unblock</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminUser;
