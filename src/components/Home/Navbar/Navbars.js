import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.svg';
import './Navbar.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navbars = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, []);

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg fixed-top">
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
                                <Link to="/"className="nav-link">Home</Link>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Our Portfolio</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#review">Our Team</a>
                            </li>  
                            {
                                isDoctor ? <li className="nav-item">
                                    <Link to="/allService" className="nav-link btn btn-primary btn-brand">Admin Panel</Link>
                                </li>  : <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                            }     
                            <li className="nav-item">
                                {
                                    loggedInUser.name ? <a className="nav-link users" href="#0">{loggedInUser.name}</a> : <Link to="/login" className="nav-link btn btn-primary btn-brand">Login</Link>
                                }
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>  */}
            <Navbar fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="" className="img-fluid"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link href="#portfolio">Our Portfolio</Nav.Link>
                            <Nav.Link href="#review">Our Team</Nav.Link>
                            {
                                isDoctor ? <Link className="btn btn-primary btn-brand" to="/allService">Admin Panel</Link> : <Nav.Link href="#contact">Contact Us</Nav.Link>
                            }
                            {
                                loggedInUser.name ? <Nav.Link href="#0" className="users">{loggedInUser.name}</Nav.Link> : <Link className="btn btn-primary btn-brand" to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    );
};

export default Navbars;