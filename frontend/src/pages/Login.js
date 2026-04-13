import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const currentYear = new Date().getFullYear();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("https://api.gelaspiration.com/api/auth/login", form);
            localStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
        } catch {
            alert("Invalid login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="order">
            <img src={require("../assets/logo.png")} alt="gelaspiration_logo" className="brown_logo" />
            <h2 id="login">Admin Login (SBC)</h2>
            <form onSubmit={handleLogin} className="form">
                <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
                <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
                <button type="submit" className="btn-three" disabled={loading} style={{ display: "flex" }}>{loading ? (
                    <>
                    Logging In...<div className="spinnerStyle"></div>
                    </>
                    ) : ( "Login" )}
                </button>
            </form>
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Login;
