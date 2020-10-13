import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

const Sidebar = () => {
    return (
        <div className="col-md-3 pr-0">
            <div className="order-sidebar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" className="img-fluid" />
                    </Link>
                </div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/orders">Order</Link>
                    </li>
                    <li>
                        <Link to="/serviceList">Service list</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Review</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;