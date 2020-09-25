/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
//css import
import './signUp.css'
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
//component imports
const signUp = ({setName}) => {
    const [info, setInfo] = useState(
        {
            fullName: '',
            email: '',
            password: '',
        }
    )
    const getFullName = (e) => {
        setInfo({...info, fullName: e.target.value})
    }
    const getEmail = (e) => {
        setInfo({...info, email: e.target.value})
    }

    const [confirmPassword, setConfirmPassword] = useState('');
    const getConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const getPassword = (e) => {
        setInfo({...info, password: e.target.value})
    }
    const { email, password, fullName } = info;
    const [formValidation, setFormValidation] = useState(false)
    
    const [massage, setMassage] = useState('')
    const handleSignUp = () => {
        if (email && password && confirmPassword === password) {
            setFormValidation(true)
            if (formValidation) {
            firebase.auth().createUserWithEmailAndPassword(info.email, info.password)
                .catch(function (error) {
                    setMassage(error.message)
                });
            setMassage('')
            setName(fullName)
        }
        }
        else if (confirmPassword !== password) {
            setFormValidation(false)
            setMassage("passwords didn't match")
        }
        else {
            setFormValidation(false)
            setMassage('all inputs Required')
        }
    }
    return (
        <div>
            <div className="sign-up-main-div">
                <h2 className='sign-up-title'>Sign Up</h2>
                <input type="text" className="sign-up-inputs" placeholder='Full Name' onBlur={getFullName} id="fullName"/>
                <input type="text" className="sign-up-inputs" placeholder='Email' onBlur={getEmail} id="email"/>
                <input type="password" className="sign-up-inputs" placeholder='Password' onBlur={getPassword} id="password"/>
                <input type="password" className="sign-up-inputs" placeholder='Confirm Password' onBlur={getConfirmPassword} id="confirmPassword" /> <br />
                <small class="ml-1 form-text text-danger"> {massage} </small>
                <button className="form-sign-up-button" onClick={handleSignUp}>
                    {
                        formValidation
                            ?
                            <Link to="/sign-in" className='form-sign-up-button-link'>
                                Sign Up
                            </Link>
                            :
                            <div className="form-sign-up-button-link">Sign Up</div>
                    }
                </button> <br />
                <div className="for-align">
                    <p className='for-inline'>Already have an account? </p>
                    <Link to="/sign-in" className='orange'>
                        Login
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default signUp;