import "./App.css";
import Forgotpass from "./pages/ForgotPass/Forgotpass";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Otp from "./pages/Otp/Otp";
import Signup from "./pages/Signup/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotpass" element={<Forgotpass />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
