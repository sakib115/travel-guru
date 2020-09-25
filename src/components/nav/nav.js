/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, {  useState } from 'react';
import {
  Link
} from "react-router-dom";
//css import
import './nav.css'
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
const nav = (props) => {
    return (
        <div className="d-flex">
            <div className="mr-auto">
                <Link to='/'><img src={require('./Logo-removebg-preview.png')} className='display-nav-logo' alt=""/></Link>
            </div>
            <div className="d-flex nav-items-div">
                <li className="nav-items">Blog</li>
                <li className="nav-items">Document</li>
                <li className="nav-items">Destination</li>
                <li className="nav-items">Contact</li>
            </div>
            <div className="nav-login-button">
                {
                    props.name === '' 
                    ?
                    <Link to='/sign-in'><button className="yellow-button">Login</button></Link>
                    :
                    <h1 className='text-white'>{props.name}</h1>
                }
            </div>
        </div>
    );
};

export default nav;