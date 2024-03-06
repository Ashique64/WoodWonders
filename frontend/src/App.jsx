import "./App.css";
import Forgotpass from "./pages/ForgotPass/Forgotpass";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminUser from "./pages/AdminUser/AdminUser";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotpass" element={<Forgotpass />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_home" element={<AdminDashboard />} />
                <Route path="/admin_user" element={<AdminUser />} />
            </Routes>
        </Router>
    );
}

export default App;
