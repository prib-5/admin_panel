import React from "react";
import './css/Body.css';
import './pages/css/body1.css';
const img = 'img/graduated.png';
const teacher = 'img/teacher.png';
const employee = 'img/employee.png';
const bus = 'img/bus.png';

const Body = () =>{
    const Style={
        backgroundImage:'url("signup-login-page3.jpg")',
        backgroundSize:'cover'
    }
    return(
        <>
            <div className="container-fluid mt-4">
            
                <div className="row">
                    <div className="col-12">
                        <div className="body-title">
                            <span><i class="fas fa-tachometer-alt"></i> Dashboard</span><hr></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-left">
                                <div className="num">
                                    100
                                </div>
                                <div className="title">
                                    Total Doctors
                                </div>
                            </div>
                            <div className="card1-right">
                                <div className="card1-icon">
                                    <img src={teacher} alt={teacher} height={'50px'} width={'50px'}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-left">
                                <div className="num">
                                    500
                                </div>
                                <div className="title">
                                    Total Patients
                                </div>
                            </div>
                            <div className="card1-right">
                                <div className="card1-icon">
                                    <img src={employee} alt={employee} height={'50px'} width={'50px'}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Body