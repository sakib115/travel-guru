/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
import {
  Link, useHistory, useLocation
} from "react-router-dom";
//css import
import './signIn.css'
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../fire-base-config';
//components import

firebase.initializeApp(firebaseConfig);
const signIn = ({ setName, name }) => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [massage, setMassage] = useState('');
    const [toggle, setToggle] = useState(false);
var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            setName(result.user.displayName);
        })
            .catch(function (error) {
                setMassage(error.message)
            });
        history.replace(from);
    }
var FBprovider = new firebase.auth.FacebookAuthProvider();
    const handleFBSignIn = () => {
            firebase.auth().signInWithPopup(FBprovider).then(function(result) {
                setName(result.user.displayName);
            })
                .catch(function (error) {
                    setMassage(error.message)
                });
        history.replace(from);
    }
    const [info, setInfo] = useState(
        {
            email: '',
            password: '',
        }
    )
    const getPassword = (e) => {
        setInfo({...info, password: e.target.value})
    }
    const getEmail = (e) => {
        setInfo({...info, email: e.target.value})
    }
    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(info.email, info.password)
            .catch(function (error)
            {
                setMassage(error.message)
                setToggle(false)
            });
        if (info.email && info.password) {
            setToggle(true)
        }
            if (toggle) {
                history.replace(from);
            }
    }
    return (
        <div>
            <div className="sign-in-main-div">
                <h2 className='sign-in-title'>Login</h2>
                <input type="text" className="sign-in-inputs" placeholder='Email' onBlur={getEmail} id="email"/>
                <input type="password" className="sign-in-inputs" placeholder='Password' onBlur={getPassword} id="password" /> <br/>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">remember me</label>
                <Link to='/' className="forgot-password">Forgot password</Link>
                <small class="ml-1 form-text text-danger massage"> {massage} </small>
                <button className="form-login-button" onClick={handleLogin}>Login</button> <br />
                <div className="for-align">
                    <p className='for-inline'>Don't have an account? </p>
                    <Link to="/sign-up" className='orange'>
                        Create an account
                    </Link>
                    <h5 className='mt-4'>or Sign In with
                        <img src={require('./google.png')} onClick={handleGoogleSignIn} className='sign-in-google' alt="" />
                        ||
                        <img src={require('./fb.png')} onClick={handleFBSignIn} className='sign-in-facebook' alt="" />
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default signIn;