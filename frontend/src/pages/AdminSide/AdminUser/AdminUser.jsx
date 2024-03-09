import React, { useEffect, useState } from "react";
import "./AdminUser.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import baseURL from "../../../api/api";

const AdminUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get(`${baseURL}/admin_users`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Users :", error);
            });
    };

    const handleBlock = (userID) => {
        axios
            .post(`${baseURL}/admin_users`, { user_id: userID, action: "block" })
            .then((response) => {
                console.log(response.data.message);
                fetchUsers();
            })
            .catch((error) => {
                console.log("Error blocking user:", error);
            });
    };

    const handleUnblock = (userID) => {
        axios
            .post(`${baseURL}/admin_users`, { user_id: userID, action: "unblock" })
            .then((response) => {
                console.log(response.data.message);
                fetchUsers();
            })
            .catch((error) => {
                console.log("Error unblocking user:", error);
            });
    };

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
                        </div>
                    </Row>
                    <Row className="admin-user-child-2">
                        <div className="table-responsive">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User Name</th>
                                        <th>E-mail</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone_number}</td>
                                            <td>{user.is_active ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Button className="btn-danger me-2" onClick={() => handleBlock(user.id)}>
                                                    Block
                                                </Button>
                                                <Button className="btn-primary me-2" onClick={() => handleUnblock(user.id)}>
                                                    Unblock
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminUser;
