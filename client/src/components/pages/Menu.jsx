import React from "react";
import { NavLink } from "react-router-dom";
import About from './About';
import Loginsignup from "./loginsignup";


const Menu = () =>{
    return(
        <>
            <div className="menu">
                <nav>
                <img src="logo.jpg" height={'30px'} className="photo" alt="" ></img>
                    <ul>
                        
                        <li><NavLink to={'/'} className={'nav'}>Find Doctors</NavLink></li>
                        <li><NavLink to={'/About'} className={'nav'}>Video Consultation</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Lab Tests</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Surgeries and Therapies</NavLink></li>
                        <li><NavLink to={''} className={'nav3'} role="button" data-bs-toggle="dropdown">Security And Help</NavLink></li>
                        <li><NavLink to={'./Loginsignup'} className={'nav2'}><button class="b1">Sign In/Log In</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default Menu