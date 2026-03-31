import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [contestants, setContestants] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        fetchContestants();
    }, [navigate]);

    const fetchContestants = async () => {
        try {
            const res = await axios.get("https://gelaspiration-backend.onrender.com/api/contestants");
            setContestants(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteContestant = async (id) => {
        await axios.delete(`https://gelaspiration-backend.onrender.com/api/contestants/${id}`);
        fetchContestants();
    };

    const filtered = contestants.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: "20px" }}>
            <h1 id="dashboard">Admin Dashboard</h1>
            <input placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => window.open("https://gelaspiration-backend.onrender.com/api/contestants/export")} id="export">Export Excel</button>
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
                            style={{ borderRadius: "50%" }}
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
        </div>
    );
}

export default Admin;
