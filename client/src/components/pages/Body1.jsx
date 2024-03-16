import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa";


function Body1() {
    return (
        <>
            <div className="input-container">
            
                <input type="text" placeholder=" Enter your Location" className="location-input" />
                <input type="text" placeholder=" Search Hospital,Doctors,etc" className="doctor-input" />
                <button class="emergency">EMERGENCY 24x7</button>
            </div>
            <div className="block">
                <img src="doc.avif" alt="." className="picc" height={370}></img>
                <div className="health">
                    <img src="consult.jpg" height={200} alt="."></img>
                    <h3 className="q1">Online Video Consultation</h3>
                    <p classname="q2">Connect to the Best doctors Online</p>
                </div>
                <div className="health">
                    <img src="offe.gif" height={200} alt="." width={200}></img>
                    <h3 className="q1">Find Doctors Near You</h3>
                    <p classname="q2">Confirm Appointments</p>
                </div>
                <div className="health">
                    <img src="tests.avif" height={200} alt="." width={200}></img>
                    <h3 className="q1">Lab Tests</h3>
                    <p classname="q2">Sample Pickup at your Home</p>
                </div>
                <div className="health">
                    <img src="surgeries.jpg" height={200} alt="."></img>
                    <h3 className="q1">Surgeries</h3>
                    <p classname="q2">Safe and trusted surgery centres</p>
                </div>
            </div>
            <div className="h1">
                <p>Consult top doctors online for any health concern
                    <button className="bb">SEE MORE</button>
                </p>
            </div>
            <div className="block1">
                <div className="health1">
                    <img src="acne.webp" height={100} alt="."></img>
                    <h3 className="q1">Acne,pimple and skin issues</h3>
                    <a href="#" className="a1">Consult Now</a>
                </div>
                <div className="health1">
                    <img src="top-speciality-stomach.svg" height={100} alt="."></img>
                    <h3 className="q1">Stomach Issues</h3>
                    <a href="#" className="a1">Consult Now</a>
                </div>
                <div className="health1">
                    <img src="top-speciality-gynaecologist.svg" height={100} alt="."></img>
                    <h3 className="q1">Gynaecology</h3>
                    <a href="#" className="a1">Consult Now</a>
                </div>
                <div className="health1">
                    <img src="coughing.webp" height={100} alt="."></img>
                    <h3 className="q1">Cough and Cold</h3>
                    <a href="#" className="a1">Consult Now</a>
                </div>
                <div className="health1">
                    <img src="top-speciality-gp.svg" height={100} alt="."></img>
                    <h3 className="q1">General Physician</h3>
                    <a href="#" className="a1">Consult Now</a>
                </div>
            </div>
            <div className="h1">
                <p>Book an appointment for an in-clinic consultation
                    <button className="bb">SEE MORE</button>
                </p>
            </div>

            <div className="block2">
                <div className="health">
                    <img src="dentist.jpg" height={200} alt="." width={220}></img>
                    <h3 className="q1">Dentist</h3>
                    <p classname="q2">Teething Troubles?Schedule a Dental checkup</p>
                </div>
                <div className="health">
                    <img src="gyno.jpg" height={200} alt="." width={220}></img>
                    <h3 className="q1">Gynaecologist</h3>
                    <p classname="q2">Explore for women health,pregnancy adn infertility treatment</p>
                </div>
                <div className="health">
                    <img src="nutrition.jpg" height={200} alt="." width={220}></img>
                    <h3 className="q1">Nutrition</h3>
                    <p classname="q2">Get guidance on eating right</p>
                </div>
                <div className="health">
                    <img src="physio.avif" height={200} alt="." width={220}></img>
                    <h3 className="q1">Physiotherapies</h3>
                    <p classname="q2">Pulled Muscle?Get it treated by trained physiotherapist</p>
                </div>
                <div className="health">
                    <img src="general.avif" height={200} alt="." width={250}></img>
                    <h3 className="q1">General Surgeon</h3>
                    <p classname="q2">Find the right surgeon</p>
                </div>
            </div>

        </>




    );
}

export default Body1