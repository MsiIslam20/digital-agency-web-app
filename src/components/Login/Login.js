import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import google from '../../images/google.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'

const Login = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signInUser = {name: displayName, email, img: photoURL}
            setLoggedInUser(signInUser);
            history.replace(from);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <div className="register-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="register-inner text-center mt-4">
                            <Link to="/">
                                <img src={logo} alt="" className="img-fluid" />
                            </Link>
                            <div className="row mt-5">
                                <div className="col-md-7 mx-auto">
                                    <div className="register-form logIn">
                                        <h3>Login With</h3>
                                        <p onClick={handleGoogleSignIn} className="login-opt">
                                            <img src={google} alt="" className="img-fluid" />
                                        Continue With Google
                                    </p>
                                        <h6>
                                            Don’t have an account? <span>Create an account</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;