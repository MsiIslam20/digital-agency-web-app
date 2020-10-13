import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import google from '../../images/google.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'

const Login = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    const handleGoogleSignIn = () => {

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