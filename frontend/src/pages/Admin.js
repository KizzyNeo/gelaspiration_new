import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [contestants, setContestants] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const [selectedImage, setSelectedImage] = useState(null);

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    };

    const modalStyle = {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "500px",
        width: "90%",
        textAlign: "center"
    };

    const btnStyle = {
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        background: "#333",
        color: "#fff"
    };

    // const token = localStorage.getItem("token");
    
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        fetchContestants();
    }, [navigate]);

        const fetchContestants = async () => {
        try {
            const res = await axios.get("https://api.gelaspiration.com/api/contestants");
            setContestants(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteContestant = async (id) => {
        await axios.delete(`https://api.gelaspiration.com/api/contestants/${id}`);
        //     {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         }
        // );
        fetchContestants();
    };

    const filtered = contestants.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div style={{ padding: "20px" }}>
            <img src={require("../assets/logo.png")} alt="gelaspiration_logo" id="admin_logo" />
            <h1 id="dashboard">Admin Dashboard (SBC)</h1>
            <button onClick={handleLogout} id="logout_btn">Logout</button>
            <input placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} id="search" />
            <button onClick={() => window.open("https://api.gelaspiration.com/api/contestants/export")} id="export">Export Excel</button>
            <table border="1" cellPadding="10" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Location</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((c) => (
                        <tr key={c._id}>
                            <td>{c.contestantId}</td>
                            <td><img src={c.photo}
                            alt="passport" 
                            width="60"
                            height="60"
                            style={{ borderRadius: "50%", cursor: "pointer" }}
                            onClick={() => setSelectedImage(c.photo)}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/60";
                            }}
                            />
                            </td>
                            <td>{c.name}</td>
                            <td>{c.gender}</td>
                            <td>{c.location}</td>
                            <td>{c.phone}</td>
                            {/* <td>
                                <button onClick={async () => {
                                const newName = prompt("Enter new name", c.name);
                                
                                if (!newName || newName.trim() === "") return;

                                try {
                                    await axios.put(`http://localhost:5000/api/contestants/${c._id}`, {name: newName},
                                    {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                        }
                                    );

                                fetchContestants();
                            } catch (err) {
                                console.error(err);
                                alert("Update failed");
                            }}} className="btn-four">
                                Edit
                            </button>
                            </td> */}
                            <td><button onClick={() => deleteContestant(c._id)} className="btn-four">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedImage && (
                <div style={overlayStyle}>
                    <div style={modalStyle}>
                        <img src={selectedImage} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} alt="contestant_image" />
                        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }} >
<a href={selectedImage + "?fl_attachment=true"} target="_blank" rel="noreferrer" download={selectedImage}>
                                 <button style={btnStyle}>Download</button>
                            </a>
                            <button onClick={() => setSelectedImage(null)} style={btnStyle}>
                                Close
                            </button>
                        </div>
                    </div>
                    </div>
            )}
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Admin;
