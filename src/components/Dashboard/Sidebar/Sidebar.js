import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge,  faPlus , faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.svg';

const Sidebar = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://desolate-falls-67613.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
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
                    {
                        isAdmin ? <div>
                            <li>
                                <Link to="/allService"><FontAwesomeIcon icon={faIdBadge} /> Service list</Link>
                            </li>
                            <li>
                                <Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                            </li> 
                            <li>
                                <Link to="/makeAdmin"><FontAwesomeIcon icon={faUser} /> Make Admin</Link>
                            </li>
                        </div> : <div>
                            <li>
                                <Link to="/serviceList"><FontAwesomeIcon icon={faIdBadge} /> Service list</Link>
                            </li>
                            <li>
                                <Link to="/reviews"><FontAwesomeIcon icon={faComment} /> Review</Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;