import React,{useState} from "react";
import './css/Sidebar.css';
import { NavLink } from "react-router-dom";

const Sidebar = () =>{
    const [backgroundImage , setBackgroundImage]=useState('signup-login-page3.jpg')
    const handleClick=() =>{
        setBackgroundImage('signup-login-page3.jpg');
    };

    const ShowMenu = () =>{
        if(document.getElementById('submenu').style.display === 'block'){
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }
    }

    const ShowMenu1 = () =>{
        if(document.getElementById('submenu1').style.display === 'block'){
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop1').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div className="sidebar">
                            <div className="sidebar-top">
                                <img className="i1" src="img/logo.png" ></img>
                            </div>
                            <div id="sidebar-bottom">
                                <NavLink to={'/'} className={'nav mt-3'} id="active"><i class="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                                <NavLink to={'/pages/Home'} className={'nav'}><i class="fas fa-home"></i> Home</NavLink>
                                <NavLink to={''} className={'nav'} onClick={ShowMenu}><i class="fas fa-user"></i> Doctor <i id="drop" className="fas fa-angle-right"></i></NavLink>
                                
                                <div id="submenu">
                                    <NavLink to={'/pages/AddStudent'} className={'subnav'}><i class="far fa-circle"></i>NEW</NavLink>
                                    <NavLink to={'/pages/AddStudent1'} className={'subnav'}><i class="far fa-circle"></i>LOGIN</NavLink>
                                    <NavLink to={''} className={'subnav'}><i class="far fa-circle"></i> View Doctor</NavLink>
                                </div>

                                <NavLink to={''} className={'nav'} onClick={ShowMenu1}><i class="fas fa-user"></i> Patient <i id="drop1" className="fas fa-angle-right"></i></NavLink>
                                
                                <div id="submenu1">
                                    <NavLink to={'/pages/AddPatient'} onClick={handleClick} className={'subnav'}><i class="far fa-circle"></i>NEW</NavLink>
                                    <NavLink to={'/pages/AddPatient1'} onClick={handleClick} className={'subnav'}><i class="far fa-circle"></i>LOGIN</NavLink>
                                    <NavLink to={''} className={'subnav'}><i class="far fa-circle"></i> View Patient</NavLink>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar