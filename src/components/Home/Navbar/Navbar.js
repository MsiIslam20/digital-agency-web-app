import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../images/logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
                       <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" className="img-fluid"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                        <ul className="navbar-nav ml-auto">                           
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Home</a>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Our Portfolio</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Our Team</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact Us</a>
                            </li>      
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary btn-brand" href="#0">Login</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    );
};

export default Navbar;