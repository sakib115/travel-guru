import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
const privateRoute = ({ children, ...rest }) => {
    var user = firebase.auth().currentUser;
    var email;
    if (user != null) {
        email = user.email;
    }
    return (
            <Route
                {...rest}
                render={({ location }) => email ?
                    (children) :
                    ( <Redirect to={{ pathname: "/sign-in", state: { from: location }}}/> )
                }
            />
    );
};

export default privateRoute;