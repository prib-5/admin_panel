import React from "react";
import Sidebar from "./Sidebar";
import './css/Body.css';
import { NavLink } from "react-router-dom";
import Body from "./Body";


const user = 'img/user (1).png';
const bell = 'img/bell.png';
const msg = 'img/email (1).png';

const Main = () =>{

    const ShowProfile = () =>{
        if(document.getElementById('profile').style.display === 'block'){
            document.getElementById('profile').style.display = 'none';
        }else{
            document.getElementById('profile').style.display = 'block';
        }
    }
    const Style={
        backgroundImage:'url("signup-login-page3.jpg")',
        backgroundSize:'cover'
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>

                    <div className="col-12 col-md-10 p-0 m-0">
                    <div style={Style}></div>
                        <div className="top_header">
                            <div className="container-fluid">
                               <div className="row">
                                    <div className="col-12 col-md-4 form-area">
                                        <form>
                                            <div class="form-group">
                                                <input type="search" class="form-control" id="exampleInputEmail1" placeholder="Search..." aria-describedby="emailHelp" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="icons">
                                                                                       <span onClick={ShowProfile}><img src={user} alt={user} height={'40px'} width={'40px'}></img></span>

                                            <div id="profile">
                                                <NavLink to={''} className={'profile-nav'}><i className="fas fa-user"></i> Hi Name</NavLink>
                                                <NavLink to={''} className={'profile-nav'}><i className="fas fa-user"></i> Profile</NavLink>
                                                <NavLink to={''} className={'profile-nav'}><i class="fas fa-cog"></i> Setting</NavLink>
                                                <NavLink to={''} className={'profile-nav'} style={{color:'red'}}><i class="fas fa-sign-out-alt"></i> Logout</NavLink>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <Body />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main