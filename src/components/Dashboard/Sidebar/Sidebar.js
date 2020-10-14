import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.svg';

const Sidebar = () => {

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
        <div className="col-md-3 pr-0">
            <div className="order-sidebar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" className="img-fluid" />
                    </Link>
                </div>
                <ul className="list-unstyled">
                    {/* <li>
                        <Link to="/orders">Order</Link>
                    </li> */}
                    {
                        isDoctor ?<div>
                            <li>
                                <Link to="/allService">Service list</Link>
                            </li>
                            <li>
                                <Link to="/addService">Add Service</Link>
                            </li> 
                            <li>
                                <Link to="/makeAdmin">Make Admin</Link>
                            </li>
                        </div> : <div>
                            <li>
                                <Link to="/serviceList">Service list</Link>
                            </li>
                            <li>
                                <Link to="/reviews">Review</Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;