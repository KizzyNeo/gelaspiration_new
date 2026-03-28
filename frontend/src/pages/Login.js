import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleLogin = async () => {
        try {
            const res = await axios.post("https://gelaspiration-backend.onrender.com/api/auth/login", form);
            localStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
        } catch {
            alert("Invalid login");
        }
    };

    return (
        <div className="center arrange form" id="login_form">
            <h2 id="login">Admin Login</h2>
            <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
            <button className="btn-two" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
