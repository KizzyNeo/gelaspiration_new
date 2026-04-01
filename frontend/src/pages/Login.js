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
        <div className="center arrange form" id="login_form">
            <img src={require("../assets/logo.png")} alt="gelaspiration_logo" className="brown_logo" />
            <h2 id="login">Admin Login</h2>
            <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
            <button className="btn-three" onClick={handleLogin}>Login</button>
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Login;
