import React from "react";
import "./AdminSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faUsers,
    faTags,
    faBox,
    faClipboardList,
    faTicketAlt,
    faChartBar,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar d-flex flex-column">
            <div className="admin-sidebar-child-1">
                <h5>WOODWONDERS</h5>
            </div>
            <div className="admin-sidebar-child-2">
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faChartLine} />
                    <Link to={"/admin_home"} className="ms-2">Dashboard</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faUsers} />
                    <Link to={"/admin_user"} className="ms-2">Users</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faTags} />
                    <Link className="ms-2">Categories</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faBox} />
                    <Link className="ms-2">Products</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <Link className="ms-2">Orders</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faTicketAlt} />
                    <Link className="ms-2">Coupons</Link>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faChartBar} />
                    <Link className="ms-2">Sales Report</Link>
                </div>
            </div>
            <div className="admin-sidebar-child-3">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="ms-2">Logout</span>
            </div>
        </div>
    );
};

export default AdminSidebar;
