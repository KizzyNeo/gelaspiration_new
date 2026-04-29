import React from "react";
// import { useState } from "react";
// import axios from "axios";
import { Helmet } from "react-helmet";

function Register() {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     phone: "",
    //     gender: "",
    //     location: "",
    //     photo: null
    // });

    // const [loading, setLoading] = useState(false);
    
    // const handleChange = (e) => {
    //     if (e.target.name === "photo") {
    //         setFormData({ ...formData, photo: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     setLoading(true);

    //     const data = new FormData();
    //     data.append("name", formData.name);
    //     data.append("phone", formData.phone);
    //     data.append("gender", formData.gender);
    //     data.append("location", formData.location);
    //     data.append("photo", formData.photo);

    //     try {
    //         const res = await axios.post("https://api.gelaspiration.com/api/contestants", data);
    //         console.log(res.data);
    //         // alert("Registration Successful!");
    //         window.location.href="https://chat.whatsapp.com/BnaSadISdVd0tk0SAwj4pM?mode=gi_t";
    //     } catch (err) {
    //         console.error(err);
    //         alert("Registration failed. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const currentYear = new Date().getFullYear();

    return (
        <div className="order">
            <Helmet>
                            <meta charset="utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <title>Register | SBC</title>
                            <meta name="description" content="Register for Sing Better Competition (SBC) 7.0. A super competition for 
                            amazing talents." />
                            <meta name="keywords" content="register, join, sing, competition, sbc, music, talent, nigeria" />
                            <meta name="author" content="Gelaspiration" />
                            <meta property="og:title" content="Sing Better Competition (SBC) 7.0" />
                            <meta property="og:description" content="Join now!" />
                            <meta property="og:type" content="website" />
                            <meta property="og:image" content="https://gelaspiration.com/src/assets/2.png" />
                            <meta property="og:url" content="https://gelaspiration.com" />
                            <meta name="twitter:card" content="summary_large_image" />
                        </Helmet>
                        alert("Registration is closed.");
    {/* <img src={require("../assets/logo.png")} alt="gelaspiration_logo" className="brown_logo" />
            <div id="instruction">
                <h3 id="info2">Note:</h3>
                <p id="info2_text">
                    After entering your details, click on the "Submit" button, 
                    wait for it to finish, leave your browser open and you will be REDIRECTED automatically to the official 
                    WhatsApp group for the contest. Please follow the on-screen 
                    instructions of your browser to join the WhatsApp group. Success!
                </p>
            </div>
            <h2 id="reg">Register for SBC 7.0</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <select name="gender" onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select id="state" name="location" onChange={handleChange} required>
                    <option value="">--Select a State--</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="FCT">Federal Capital Territory</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <label className="info">Professional Photo:</label>
                <input type="file" name="photo" id="photo" onChange={handleChange} required />
                <button type="submit" className="btn-three" disabled={loading} style={{ display: "flex" }}>{loading ? (
                    <>
                    Registering...<div className="spinnerStyle"></div>
                    </>
                ) : ( "Submit" )}
                </button>
            </form> */}
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Register;
