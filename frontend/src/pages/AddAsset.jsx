// src/pages/AddAsset.jsx

import { useState } from "react";
import { createAsset } from "../api/assetApi";
import { useNavigate } from "react-router-dom";

export default function AddAsset() {
    const [form, setForm] = useState({
        assetName: "",
        category: "",
        assetValue: "",
        purchaseDate: "",
        warrantyExpiryDate: "",
        reminderDate: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await createAsset(form);
            alert("Asset added successfully");
            navigate("/dashboard");
        } catch (err) {
            alert("Failed to add asset");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Add Asset</h2>

                <input
                    style={styles.input}
                    placeholder="Asset Name"
                    onChange={(e) =>
                        setForm({ ...form, assetName: e.target.value })
                    }
                />

                <input
                    style={styles.input}
                    placeholder="Category"
                    onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                    }
                />

                <input
                    style={styles.input}
                    type="number"
                    placeholder="Asset Value"
                    onChange={(e) =>
                        setForm({ ...form, assetValue: e.target.value })
                    }
                />

                {/* Purchase Date */}
                <label style={styles.label}>Purchase Date</label>
                <input
                    style={styles.input}
                    type="date"
                    onChange={(e) =>
                        setForm({ ...form, purchaseDate: e.target.value })
                    }
                />

                {/* Warranty Expiry */}
                <label style={styles.label}>Warranty Expiry Date</label>
                <input
                    style={styles.input}
                    type="date"
                    onChange={(e) =>
                        setForm({ ...form, warrantyExpiryDate: e.target.value })
                    }
                />

                {/* Reminder Date */}
                <label style={styles.label}>Reminder Date</label>
                <input
                    style={styles.input}
                    type="date"
                    onChange={(e) =>
                        setForm({ ...form, reminderDate: e.target.value })
                    }
                />

                <button style={styles.button} onClick={handleSubmit}>
                    Add Asset
                </button>

                <p style={{ marginTop: "15px" }}>
                    <span style={styles.link} onClick={() => navigate("/dashboard")}>
                        ← Back to Dashboard
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
        width: "350px",
        color: "white"
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "8px 0",
        borderRadius: "5px",
        border: "none"
    },
    label: {
        fontSize: "12px",
        color: "#94a3b8"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#22c55e",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px"
    },
    link: {
        color: "#60a5fa",
        cursor: "pointer",
        textDecoration: "underline"
    }
};