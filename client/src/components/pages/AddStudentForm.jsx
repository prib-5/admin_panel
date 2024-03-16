import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { addUser } from "../../service/api.js";
import './css/student.css';

const AddStudentForm = () =>{
    const toast = useToast()

    const [student, setStudent] = useState({
        name:'',
        mail:'',
        password:'',
    })
    
    const [number, setNumber] = useState('');
    
    const [action,setAction]=useState("Sign Up"); 

    const onValueChange = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value});
        console.log(student)
    }

    const onValueChangeNew = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value})
        let inputValue = e.target.value;

        inputValue = inputValue.replace(/\s/g, '');
        inputValue = inputValue.slice(0, 12);

        inputValue = inputValue.replace(/(\d{4})/g, '$1 ');
        setNumber(inputValue);
        console.log(student)
    }
    
    const nameRef = useRef(null);
    
    const submitData = async(e) =>{
        e.preventDefault();

        const {name, mail} = student;
        if(!name){
            document.getElementById('nameValid').style.display = 'block';
            nameRef.current.focus();
        }else if(!mail){
            alert("Enter Your Email Id");
        }else{
            const formData = new FormData();
            formData.append('mail', student.mail)

            const res = await addUser(formData)
            if(res.status === 201){
                toast({
                    title: res.data,
                    description:'Data Successfully Inserted',
                    status: 'success',
                    duration: 9000,
                    position:'top',
                    isClosable: true,
                  })
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }else{
                toast({
                    title: res.data,
                    description:'Something Went Wrong',
                    status: 'danger',
                    duration: 9000,
                    position:'top',
                    isClosable: true,
                  })
            }

        }


    }
    const login = async(e) => {
            
        const { mail, password } = student;
        const student = student.find((u) => u.mail === mail && u.password === password);
        if (student) {
            toast({
                title: 'Login Successful',
                description: 'Welcome back!',
                status: 'success',
                duration: 10000,
                position: 'top',
                isClosable: true,
            });
            
        } else {
            toast({
                title: 'Login Failed',
                description: 'Invalid credentials. Please try again.',
                status: 'error',
                duration: 9000,
                position: 'top',
                isClosable: true,
            });
        }
    };

    return(
        <>
           
        <ChakraProvider>

            </ChakraProvider>
            <form>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="body-title">
                            <span><i class="fas fa-tachometer-alt"></i> Dashboard</span> <span className="float-right"><NavLink to={'/'}><span className="pr-1">Home</span></NavLink> <i className="fas fa-angle-right" style={{fontSize:'14px'}}></i><i className="fas fa-angle-right" style={{fontSize:'14px'}}></i> <span className="pl-1 pr-1">Registration/Log In</span></span>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container pl-4 pr-4">
                            <div className="header">
                            <div className="text">{action}</div>
                            <div className="underline"></div>
                            </div>
                                <div className="row mt-3">
                                    <div className="col-12 col-md-4">
                                        <div className="name">
                                            <div class="form-group">
                                            {action==="Login"?<div></div>:<div className="input">

                                                <label for="exampleInputName">Name <span style={{color:'red'}}><small>*</small></span></label>
                                                <input type="text" name="name" ref={nameRef} onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                                <p id="nameValid"><i>Please Enter Your Name *</i></p>
                                            </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 col-md-4">
                                        <div className="email">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email Id <span style={{color:'red'}}><small>*</small></span></label>
                                                <input type="email" name="mail" onChange={(e) => onValueChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 col-md-4">
                                        <div className="password">
                                            <div class="form-group">
                                                <label for="exampleInputPassword">Password <span style={{color:'red'}}><small>*</small></span></label>
                                                <input type="text" name="password" value={number} onChange={(e) => onValueChangeNew(e)} class="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter Password" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 m-0 p-0">
                                        <div className="submit-container">
                                        <button className={action==="Login"?"submit gray":"submit"} onClick={submitData}>Sign Up</button>
                                        <button className={action==="Sign Up"?"submit gray":"submit"} onClick={login}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        </div>
                </div>
            </form>
        </>
    )
}

export default AddStudentForm