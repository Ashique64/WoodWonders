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

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar d-flex flex-column">
            <div className="admin-sidebar-child-1">
                <h5>WOODWONDERS</h5>
            </div>
            <div className="admin-sidebar-child-2">
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faChartLine} />
                    <span className="ms-2">Dashboard</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faUsers} />
                    <span className="ms-2">Users</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faTags} />
                    <span className="ms-2">Categories</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faBox} />
                    <span className="ms-2">Products</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <span className="ms-2">Orders</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faTicketAlt} />
                    <span className="ms-2">Coupons</span>
                </div>
                <div className="admin-sidebar-item">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="ms-2">Sales Report</span>
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
