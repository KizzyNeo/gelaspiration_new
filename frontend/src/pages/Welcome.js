import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Welcome() {
    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();

    var count = 0;

    function login() {
        count++;
        if (count >= 5) {
            navigate("/login");
            count = 0;
        }
    }

    useEffect (() => {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

    const elementsX = document.querySelectorAll('.animateX');
    const observerX = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    elementsX.forEach(el => observerX.observe(el));

    const elementsXL = document.querySelectorAll('.animateXL');
    const observerXL = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    elementsXL.forEach(el => observerXL.observe(el));
}, []);
    
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>SBC | Gelaspiration</title>
                <meta name="description" content="Sing Better Competition (SBC). A super competition for 
                amazing talents." />
                <meta name="keywords" content="sing, competition, sbc, music, talent, nigeria" />
                <meta name="author" content="Gelaspiration" />
                <meta property="og:title" content="Sing Better Competition (SBC)" />
                <meta property="og:description" content="Join now!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://gelaspiration.com/src/assets/2.png" />
                <meta property="og:url" content="https://gelaspiration.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="sbc_header">
                <img src={require("../assets/2.png")} alt="gelaspiration_logo" id="logo" />
            </div>
            <div id="sbc">
                <img src={require("../assets/singer.png")} id="sbc_img" alt="a_female_singer" />
                <h1 className="sbc_text">Sing Better Competition (SBC)</h1>
            </div>
            <div id="about_us" className="animate">
                <h2 id="about_header">About SBC</h2>
                <p id="about_text">
                    The Sing Better Competition stands as a celestial
                    melody in the realm of virtual gospel music contests.
                    Powered and organised by Gelaspiration Enterprise
                    propelled by the enchanting essence of Gelaspiration
                    , this competition embodies a noble mission
                    to illuminate gospel music through harmonious
                    expressions. Within this ethereal gathering, emerging
                    talents are nurtured akin to delicate blossoms in a 
                    celestial garden. Here, aspiring gospel singers unfurl
                    their voices, creating a vibrant tapestry of passion while
                    being embraced by a global audience from the comfort
                    of their own homes. This enchanted platform not only
                    fosters artistic development but also imparts the 
                    transformative power of digital innovation, empowering
                    participants to master the contemporary art of music
                    production.
                </p>
            </div>
            <div id="mission" className="animate">
                <h2 id="mission_header">Our Mission</h2>
                <p id="mission_text">
                    Our mission is to spread the gospel
                    through music by discovering,
                    empowering, and celebrating talented
                    singers. We are dedicated to helping
                    young artists overcome stage fright,
                    build self-confidence, and enhance
                    their skills, both on stage and behind
                    the scenes. With a focus on digital
                    expertise and vocal excellence, we
                    ensure that participants are not only
                    rewarded for their passion but also
                    equipped for a successful future.
                </p>
            </div>
            <div id="vision" className="animate">
                <h2>Vision</h2>
                <p id="vision_text">
                    We envision becoming Africa's leading
                    platform for promoting gospel music,
                    starting from Nigeria and expanding
                    across the continent. Our goal is to
                    help gospel artists reach their full
                    potential by offering them significant
                    financial rewards, securing record
                    deals, and providing them with long-
                    term career opportunities. By
                    supporting and elevating these voices,
                    we aim to inspire a new generation of
                    gospel music artists across Africa.


                </p>
            </div>
            <div id="why">
                <div id="note_div" className="animateXL">
                    <h3 id="note_header">Why Sing Better Competition (SBC) Stands Out?</h3>
                    <img src={require("../assets/note.png")} className="music_notes" alt="music_notes" />
                </div>
                <div id="text_container" className="animateX">
                <div id="why_text">
                    <p><span className="point">Global Reach from Home:</span> Singers can participate in the competition without the need to travel,
                    reaching a worldwide audience while staying in their comfort zones. Confidence Building: We
                    focus on helping young artists conquer stage fright and gain the confidence they need to perform
                    at their best, both on stage and in life.
                    </p>
                    <p>
                        <span className="point">Skills Development:</span> Contestants not only develop their vocal talents but also learn essential digital
                    skills, such as audio and video recording and editing, which are crucial in today's music industry.
                    </p>
                    <p>
                    <span className="point">Passion Meets Reward:</span> Participants have the opportunity to share their love for gospel music and
                    be rewarded with financial prizes, record deals, and long-term career support.
                    </p>
                    <p>
                        <span className="point">Powered and Organised by Gelaspiration Enterprise:</span> The Sing Better Competition is a competition organised by
                    Gelaspiration Enterprise, a brand that promotes creativity, innovation, and
                    aspiration in the gospel music space. It is committed to providing young gospel
                    artists with the resources, skills, and opportunities to succeed and make their mark in the music
                    industry.
                    </p>
                </div>
                </div>
            </div>
            <div id="winners">
                <img src={require("../assets/prizes.png")} id="prizes" alt="prizes" />
            </div>
            <div id="stages">
                <h2 id="stages_header">STAGES</h2>
                <ul id="stages_list">
                    <li>Auditioning Stage</li>
                    <li>First Stage</li>
                    <li>Semi-Final Stage</li>
                    <li>Final Stage</li>
                </ul>
                    { /*<h3 id="reg_fee">Registration Fee: &#8358;3,000</h3> */}
                <h3 id="reg_fee">Registration Fee: Free</h3>
                <div className="centralize">
                {/* <button className="btn-two" onClick={() => navigate("/register")}> */}
                    <button className="btn-two" onClick={() => alert("Registration is closed.")}>
                    Register Now
                </button>
                </div>
                <div id="venue">
                    <img src={require("../assets/location.png")} alt="location_icon" id="location"/>
                    <p>SBC Official Facebook page, extended streaming on YouTube, Instagram and Tiktok @Sing Better Competition.</p>
                </div>
                <h4 id="note_text">
                    <span id="note">Note: </span> Voting is required at every stage to qualify for the next stage (&#8358;100 per vote).
                </h4>
            </div>
            <div id="pros">
                <h2 id="pros_header">What SBC Holds for Participants</h2>
                <h5 className="sub_header">One Week of Intensive Training On:</h5>
                <ul className="details">
                    <li>Audio Recording/Editing</li>
                    <li>Video Recording/Editing</li>
                    <li>Voice Training Session</li>
                </ul>
                <h4 className="sub_header">Bonuses for Participants:</h4>
                <ul className="details">
                    <li>Personalised Flyers Throughout the Stages</li>
                    <li>Certification for All Participants from Stage One to the Final</li>
                    <li>Free Access to Vocal Courses from the Brand to All Finalists</li>
                    <li>A Chance to Work with Gelaspiration Enterprise (for the Winners)</li>
                </ul>
                <div className="centralize space">
                    {/* <button className="btn-two" onClick={() => navigate("/register")}> */}
                    <button className="btn-two" onClick={() => alert("Registration is closed.")}>
                    Register Now
                </button>
                </div>
            </div>
            <div id="vote">
                <h2>Vote Your Favourite Contestant:</h2>
                <button className="btn-three" onClick={() => alert("Starting Soon...")}>
                    Vote
                </button>
                <h4 id="contact">
                    For more enquiries and sponsorship contact us via:
                    <img src={require("../assets/whatsapp.png")} id="whatsapp" alt="whatsapp_icon" onClick={() => {window.location.href="https://wa.me/+2348123407932"}} />
                    || <a href="tel:+2348123407932">+2348123407932</a>
                    </h4>
            </div>
            <div id="next_container" className="animateX"> 
                <img src={require("../assets/next.jpg")} id="next" alt="next_winner" />
            </div>
            <div id="prev_winners">
                <h2 id="prev_text">SBC Previous Winners</h2>
                <img src={require("../assets/FLYER6.jpg")} id="face" alt="face_of_sbc" />
                <div id="prev">
                    <div className="winner">
                        <h3 className="specific">SBC 6.0</h3>
                        <div>
                            <img src={require("../assets/One.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Miss. Blessing Onyeka (1st | 250K | Lagos)</h6>
                            <img src={require("../assets/Two.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Susan Isaac (2nd | 120K | Ebonyi)</h6>
                            <img src={require("../assets/Three.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Mr. Gideon Uche (3rd | 70K | Imo)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 5.0</h3>
                        <div>
                            <img src={require("../assets/Flyer1.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Mr. Praise Godwin (1st | 200K | Abuja)</h6>
                            <img src={require("../assets/Flyer21.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Gabriel Abigail (2nd | 100K | Imo)</h6>
                            <img src={require("../assets/Flyer31.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Glory Tokula (3rd | 50K | Abuja)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 4.0</h3>
                        <div>
                            <img src={require("../assets/Flyer11.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Miss. Kenechukwu Onah (1st | 150K | Enugu)</h6>
                            <img src={require("../assets/Flyer2.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Praise Chiamaka (2nd | 70K | Imo)</h6>
                            <img src={require("../assets/Flyer3.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Juliet Mehara (3rd | 30K | Lagos)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 3.0</h3>
                        <div>
                            <img src={require("../assets/SBC3.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Mr. Tobias Prince (1st | 100K | Delta)</h6>
                            <img src={require("../assets/NKIRUKA.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Nkiruka Uragwu (2nd | 20K | Ebonyi)</h6>
                            <img src={require("../assets/MIRACLE.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Miracle Nwachukwu (3rd | 10K | Enugu)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 2.0</h3>
                        <div>
                            <img src={require("../assets/SBC2.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Miss. Mercy Ezechukwu (1st | 20K | Lagos)</h6>
                            <img src={require("../assets/IYIDA.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Favour Iyida (2nd | 10K | Enugu)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 1.0</h3>
                        <div>
                            <img src={require("../assets/WINNER.jpg")} className="image animate" alt="sbc_winner" />
                            <h6 className="tag">Miss. Esther Uchenna (1st | 10K | Lagos)</h6>
                            <img src={require("../assets/FAVOUR.jpg")} className="image animate" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Favour Iyida (2nd | 5K | Enugu)</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <small onClick={login}>&copy; <span id="year">{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Welcome;
