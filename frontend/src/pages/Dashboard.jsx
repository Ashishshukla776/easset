// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { getAssets } from "../api/assetApi";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [assets, setAssets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        try {
            const res = await getAssets();
            setAssets(res.data);
        } catch (err) {
            alert("Failed to load assets");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>My Assets</h2>
                <button style={styles.addBtn} onClick={() => navigate("/add")}>
                    + Add Asset
                </button>
            </div>

            {assets.length === 0 ? (
                <p style={{ color: "white" }}>No assets found</p>
            ) : (
                <div style={styles.grid}>
                    {assets.map((a) => (
                        <div key={a._id} style={styles.card}>
                            <h3>{a.assetName}</h3>
                            <p>Category: {a.category}</p>
                            <p>Value: ₹{a.assetValue}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        background: "#0f172a",
        minHeight: "100vh"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
    },
    addBtn: {
        padding: "10px",
        background: "#22c55e",
        border: "none",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
    },
    card: {
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
        color: "white"
    }
};

