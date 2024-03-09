import "./App.css";
import Home from "./pages/UserSide/Home/Home";
import Signup from "./pages/UserSide/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminSide/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminSide/AdminDashboard/AdminDashboard";
import AdminUser from "./pages/AdminSide/AdminUser/AdminUser";
import Login from "./pages/UserSide/Login/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_home" element={<AdminDashboard />} />
                <Route path="/admin_user" element={<AdminUser />} />
            </Routes>
        </Router>
    );
}

export default App;
