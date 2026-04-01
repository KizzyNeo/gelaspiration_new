import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ username: "", password: "" });

    const currentYear = new Date().getFullYear();

    const handleLogin = async () => {
        try {
            const res = await axios.post("https://api.gelaspiration.com/api/auth/login", form);
            localStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
        } catch {
            alert("Invalid login");
        }
    };

    return (
        <div id="login_form">
            <img src={require("../assets/logo.png")} alt="gelaspiration_logo" className="brown_logo" />
            <h2 id="login">Admin Login</h2>
            <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} className="login_input" />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} className="login_input" />
            <button className="btn-three" onClick={handleLogin}>Login</button>
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Login;
