// src/pages/Register.jsx

import { useState } from "react";
import { register } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await register(form);
            alert("Registered successfully");
            navigate("/");
        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Register</h2>

                <input
                    style={styles.input}
                    placeholder="Name"
                    onChange={(e) =>
                        setForm({ ...form, userName: e.target.value })
                    }
                />

                <input
                    style={styles.input}
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    style={styles.input}
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <button style={styles.button} onClick={handleSubmit}>
                    Register
                </button>

                {/* 🔥 Back to Login */}
                <p style={{ marginTop: "15px" }}>
                    Already have an account?{" "}
                    <span style={styles.link} onClick={() => navigate("/")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a"
    },
    card: {
        background: "#1e293b",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
        color: "white"
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "none"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#22c55e",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },
    link: {
        color: "#60a5fa",
        cursor: "pointer",
        textDecoration: "underline"
    }
};